<script>
  import Nav from '../components/Nav.svelte'
  import Meet from '../components/Meet.svelte'
  import Container from '../components/Container.svelte'
  import Button from '../components/Button.svelte'
  import Rooms from './Rooms.svelte'
  import Manage from './Manage.svelte'
  import Customize from './Customize.svelte'
  import Theme from './Theme.svelte'
  import { Users } from '../models'
  import { getUserId } from '../services/local'
  import { sideBar } from '../services/store'
  import { appName } from '../../config'

  document.title = appName

  let sideBarValue

  sideBar.subscribe((value) => {
    sideBarValue = value
  })

  const userId = getUserId()

  let collapsed = false
  let activeRoom = false
  let activeRoomName = ''
  let pinnedRooms = {}

  Users.watch(`/${userId}`, false, (remoteUser) => {
    activeRoom = remoteUser.activeRoom
    activeRoomName = remoteUser.activeRoomName
    pinnedRooms = remoteUser.pinnedRooms || {}
  })

  if (userId) {
    Users.onDisconect(userId)
  }

  function collapse () {
    collapsed = !collapsed
  }
</script>

<style>
  main {
    display: flex;
    justify-content: flex-start;
  }
  .meet {
    display: inline-block;
    position: relative;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
  }
  .sidebar {
    display: inline-block;
    position: relative;
    width: 25vw;
    min-width: 400px;
    padding: 1em;
    box-sizing: border-box;
    transition: all 0.75s;
  }
  .collapsed {
    transform: translateX(-25vw);
    min-width: 0;
    width: 0;
    padding: 0;
    margin: 0;
    transition: all 0.75s;
  }
  .version {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
  }
</style>

<Theme />

<Nav {userId} />

<main>
  {#if userId}
    <div class="sidebar {collapsed ? 'collapsed' : ''}">
      {#if sideBarValue === 'list-rooms'}
        <Rooms {activeRoom} {pinnedRooms} />
      {:else if sideBarValue === 'manage'}
        <Manage />
      {:else if sideBarValue === 'customize'}
        <Customize />
      {/if}
    </div>
    <Button
      onClick={collapse}
      classes='collapse'
      type='blank'
    >
      {#if collapsed}
        {'>'}
      {:else}
        {'<'}
      {/if}
    </Button>
    <div class="meet">
      {#if activeRoom}
        <Container classes="meet-container">
          <p class="title">sala: {activeRoomName}</p>
          <Meet {activeRoom}/>
        </Container>
      {:else}
        <Container classes="meet-container">
          <p class="title">sala: n/a</p>
          <p>Selecione uma das salas para poder conversar</p>
        </Container>
      {/if}
    </div>
  {:else}
    <Container classes="login-notice auto-margin">
      <p>Para prosseguir por favor faça o login.</p>
    </Container>
  {/if}
</main>
<p class="version">version: {VERSION}</p>
