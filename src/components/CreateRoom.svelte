<script>
  import { Rooms } from '../models'
  import { getUserId } from '../services/local'
  import { sideBar } from '../services/store'

  let roomName = ''
  const userId = getUserId()

  function createRoom () {
    if (!roomName || roomName.length < 3) {
      window.alert('O nome de uma nova sala deve ter no mínimo 3 caracteres')
      return false
    }

    return Rooms.create({
      name: roomName,
      createdBy: userId,
    })
      .then(() => {
        roomName = ''
        return sideBar.update(() => 'list-rooms')
      })
  }
</script>

<style>
  .actions {
    padding-top: 15px;
  }
</style>

<div class="nes-container is-dark with-title is-centered">
  <p class="title">criar sala</p>
  <div class="nes-field is-dark">
    <label for="name_field">nome</label>
    <input
      type="text"
      id="name_field"
      class="nes-input is-dark"
      bind:value={roomName}
    />
  </div>
  <div class='actions'>
    <button
      type="button"
      class="nes-btn is-success"
      on:click={createRoom}
    >
      criar
    </button>
  </div>
</div>
