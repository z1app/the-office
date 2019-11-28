<script>
  import UserProfile from './UserProfile.svelte'
  import { Rooms } from '../models'
  import { arrayrify } from '../services/helpers'

  export let room

  function deleteRoom () {
    const { id } = this
    const confirmDeletingRoom = window.confirm('Você tem certeza que deseja deletar essa sala?')
    if (confirmDeletingRoom) {
      Rooms.delete(id)
    }
  }
</script>

<style>
  .container {
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>


<div class="container nes-container is-dark with-title is-centered">
  <p class="title">{room.name}</p>
  {#each arrayrify(room.users) as user}
    <UserProfile user={user}/>
  {/each}
  <br />
  {#if room.globalyPinnedRoom}
    <p>essa sala não pode ser deletada pois é uma sala fixa</p>
  {:else if !room.users}
    <button type="button" class="nes-btn is-error" on:click={deleteRoom.bind(room)}>
      deletar
    </button>
  {:else}
    <p>essa sala não pode ser deletada pois possui usuários dentro dela</p>
  {/if}
</div>
