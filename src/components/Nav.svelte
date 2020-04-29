<script>
  import Login from '../containers/Login.svelte'
  import { sideBar } from '../services/store'

  function updateSideBar (name) {
    return () => sideBar.update(() => name)
  }

  let sideBarValue
  export let userId

  sideBar.subscribe((value) => {
    sideBarValue = value
  })
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
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
    background-color: rgb(255, 62, 0);
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
    {#if userId}
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
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class:selected={sideBarValue === 'manage'}
          on:click={updateSideBar('manage')}
        >
          gerenciar
        </a>
      </li>
      <li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class:selected={sideBarValue === 'customize'}
          on:click={updateSideBar('customize')}
        >
          customizar
        </a>
      </li>
    {/if}
    <li class="f-right">
      <a
        class="default-link"
        href="https://github.com/pagarme/the-office"
        target="_blank"
      >
        <i class="nes-icon github is-medium" />
      </a>
      <Login />
    </li>
  </ul>
</nav>
