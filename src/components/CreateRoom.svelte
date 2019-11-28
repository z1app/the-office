<script>
  import { Rooms } from '../models'
  import { getUserId } from '../services/local'
  import { sideBar } from '../services/store'
  import Container from './Container.svelte'
  import InputText from './InputText.svelte'

  let roomName = ''
  const userId = getUserId()

  function createRoom () {
    console.log('ROOMNAME ->', roomName)
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

<Container>
  <p class="title">criar sala</p>
  <InputText
    label='nome'
    bind:value={roomName}
  />
  <div class='actions'>
    <button
      type="button"
      class="nes-btn is-primary"
      on:click={createRoom}
    >
      criar
    </button>
  </div>
</Container>
