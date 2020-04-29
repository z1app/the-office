<script>
  import { themeStore } from '../services/store'

  export let classes = ''

  let isDark = ''

  themeStore.subscribe((value) => {
    isDark = value === 'dark' ? 'is-dark' : ''
  })
</script>

<style>
  .auto-margin {
    margin: auto !important;
    margin-top: 100px !important;
  }
  .margin-top {
    margin-top: 10px !important;
  }
  .login-notice {
    margin: auto;
    margin-top: 100px;
  }
  .meet-container {
    position: sticky;
    top: 20px;
  }
</style>

<div class={`${classes} ${isDark} nes-container with-title is-centered`}>
  <slot></slot>
</div>
