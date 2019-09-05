<script>
  import Login from '../containers/Login.svelte'
  import { sideBar } from '../services/store.js'

  function updateSideBar (name) {
    return () => sideBar.update(() => name)
  }

  let sideBarValue

  sideBar.subscribe(value => {
    sideBarValue = value
  })
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255,62,0,0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255,62,0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none !important;
    padding: 1em 0.5em;
    display: block;
  }

  .f-right {
    float: right;
  }

  .default-link {
    display: inline;
  }

  .nes-icon.is-medium {
    margin-right: 32px;
    margin-bottom: 14px;
    transform: scale(3);
  }

  .slack {
    display: inline;
  }
</style>

<nav>
  <ul>
    <li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        class:selected={sideBarValue === 'list-rooms'}
        on:click={updateSideBar('list-rooms')}
      >
        salas
      </a>
    </li>
    <li>
      <a
        class:selected={sideBarValue === 'create-room'}
        on:click={updateSideBar('create-room')}
      >
        gerenciar
      </a>
    </li>
    <li class="f-right">
      <a
        class="default-link"
        href="https://pagarme.slack.com/messages/CLZDPELNM"
        target="_blank"
      >
        <img
          class="slack"
          src="images/slack.png"
          alt="slack logo"
          width="50"
        />
      </a>
      <a
        class="default-link"
        href="https://github.com/pagarme/the-office"
        target="_blank"
      >
        <i class="nes-icon github is-medium"></i>
      </a>
      <Login/>
    </li>
  </ul>
</nav>
