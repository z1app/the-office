<script>
  import UserProfile from './UserProfile.svelte'
  import {
    Rooms,
    Users,
  } from '../models'

  import {
    getUserProfile,
    setUserProfile,
  } from '../services/local'

  import {
    arrayrify,
  } from '../services/helpers'

	export let name
  export let users
  export let active
  
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
          activeRoom: name,
        })
        return Users.update(userProfile.id, { activeRoom: name })
      })
      .then(() => Rooms.update(`${name}/users/${userProfile.id}`, userProfile))
  }

  function leaveRoom () {
    const userProfile = getUserProfile()
    return Rooms.delete(`${name}/users/${userProfile.id}`)
      .then(() => {
        setUserProfile({
          ...userProfile,
          activeRoom: undefined,
        })
        return Users.update(userProfile.id, { activeRoom: null })
      })
  }
</script>
  
<style>
  .container {
    margin-bottom: 10px;
  }
</style>

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
