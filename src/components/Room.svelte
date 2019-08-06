<script>
  import UserProfile from './UserProfile.svelte'
  import { Rooms, Users } from '../models'

  import {
    getUserProfile,
    getUserId,
    setUserProfile,
  } from '../services/local'

  import {
    arrayrify,
    slugify
  } from '../services/helpers'

  export let name
  export let users
  export let active
  export let pinnedRoom
  export let id
  export let globalyPinnedRoom

  function updateRoomPath (name) {
    if (!name) {
      history.pushState({}, 'Index', '#/')
    } else {
      history.pushState({}, name, `#/rooms/${slugify(name)}`)
    }
  }

  function enterRoom () {
    const userProfile = getUserProfile()
    return Users.get(userProfile.id)
      .then(user => {
        if (user.activeRoom) {
          return Promise.all([
            Rooms.delete(`${user.activeRoom}/users/${userProfile.id}`),
            Users.update(userProfile.id, { activeRoom: null }),
          ])
        }
        return user
      })
      .then(() => {
        setUserProfile({
          ...userProfile,
          activeRoom: id,
          activeRoomName: name,
        })

        return updateRoomPath(name)
      })
      .then(() => {
        return Promise.all([
          Users.update(
            userProfile.id,
            {
              activeRoom: id,
              activeRoomName: name,
            }
          ),
          Rooms.update(
            `${id}/users/${userProfile.id}`,
            userProfile
          )
        ])
      })
  }

  function leaveRoom () {
    const userProfile = getUserProfile()

    setUserProfile({
      ...userProfile,
      activeRoom: undefined,
      activeRoomName: undefined,
    })
    updateRoomPath()

    return Promise.all([
      Rooms.delete(`${id}/users/${userProfile.id}`),
      Users.update(
        userProfile.id,
        {
          activeRoom: null,
          activeRoomName: null,
        }
      )
    ])
  }

  function togglePin () {
    const uid = getUserId()
    Users.set(`${uid}/pinnedRooms/${id}`, !pinnedRoom)
  }

  function getCurrentPath () {
    const { hash } = window.location
    if (!hash || !hash.length) {
      return false
    }

    return hash.split('/').pop()
  }

  const pathRoom = getCurrentPath()

  if (pathRoom === slugify(name) && !active) {
    enterRoom()
  }
</script>

<style>
  .container {
    margin-bottom: 10px;
  }
  .nes-icon {
    float: right;
    top: 10px;
    right: 10px;
    z-index: 1;
  }
</style>

{#if globalyPinnedRoom}
  <i
    class="nes-icon is-small star"
    alt="globally_pinned_room"
  />
{:else}
  <i
    class="nes-icon is-small heart"
    class:is-empty={!pinnedRoom}
    on:click={togglePin}
  />
{/if}
<div class="container nes-container with-title is-centered">
  <p class="title">{name}</p>
  {#each arrayrify(users) as user}
    <UserProfile user={user}/>
  {/each}
  <br />
  {#if active}
    <button
      type="button"
      class="nes-btn is-error"
      on:click={leaveRoom}
    >
      sair
    </button>
  {:else}
    <button
      type="button"
      class="nes-btn is-primary"
      on:click={enterRoom}
    >
      entrar
    </button>
  {/if}
</div>
