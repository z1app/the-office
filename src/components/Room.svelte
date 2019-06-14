<script>
  import UserProfile from './UserProfile.svelte'
  import {
    Rooms,
    Users,
  } from '../models'

  import {
    getUserProfile,
    getUserId,
    setUserProfile,
  } from '../services/local'

  import {
    arrayrify,
  } from '../services/helpers'

	export let name
  export let users
  export let active
  export let pinnedRoom
  export let id
  
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
        return Users.update(
          userProfile.id,
          {
            activeRoom: id,
            activeRoomName: name,
          }
        )
      })
      .then(() => Rooms.update(`${id}/users/${userProfile.id}`, userProfile))
  }

  function leaveRoom () {
    const userProfile = getUserProfile()
    return Rooms.delete(`${id}/users/${userProfile.id}`)
      .then(() => {
        setUserProfile({
          ...userProfile,
          activeRoom: undefined,
          activeRoomName: undefined,
        })
        return Users.update(
          userProfile.id,
          {
            activeRoom: null,
            activeRoomName: null,
          }
        )
      })
  }

  function togglePin () {
    const uid = getUserId()
    Users.set(`${uid}/pinnedRooms/${id}`, !pinnedRoom)
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

<i
  class="nes-icon is-small star"
  class:is-empty={!pinnedRoom}
  on:click={togglePin}
/>
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
