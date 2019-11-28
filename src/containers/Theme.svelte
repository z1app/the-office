<script>
  import { themeStore } from '../services/store'
  import { getTheme } from '../services/local'

  let darkMode

  themeStore.update(() => getTheme())

  themeStore.subscribe((value) => {
    darkMode = value === 'dark'
  })
</script>

<svelte:head>
  {#if darkMode}
    <link rel="stylesheet" href="themes/dark-theme.css">
  {/if}
</svelte:head>
