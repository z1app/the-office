<script>
  import { themeStore } from '../services/store'
  export let onClick
  export let type = 'blank'
  export let classes = ''
  
  let darkMode

  themeStore.subscribe((value) => {
    darkMode = value === 'dark'
  })

  const whiteThemeMap = {
    default: 'is-primary',
    danger: 'is-error',
    blank: '',
  }

  const darkThemeMap = {
    default: 'is-success',
    danger: 'is-error',
    blank: 'is-success',
  }
</script>

<style>
  .collapse {
    position: sticky;
    top: 20px;
    margin-top: 20px;
    height: 45px;
  }
</style>

<button
  type="button"
  class={`${classes} nes-btn ${darkMode ? darkThemeMap[type] : whiteThemeMap[type]}`}
  on:click={onClick}
>
  <slot></slot>
</button>