<script>
  import { themeStore } from '../services/store'

  export let value
  export let label
  export let classes = ''
  export let isField = true

  let isDark = ''

  themeStore.subscribe((value) => {
    isDark = value === 'dark' ? 'is-dark' : ''
  })
</script>

<style>
  .filter-input {
    margin-bottom: 4px;
    max-width: 97.5%;
  }
</style>

{#if isField}
  <div class={`nes-field ${isDark}`}>
    <label for={label}>{label}</label>
    <input
      type="text"
      id={label}
      class={`nes-input ${isDark}`}
      bind:value={value}
    />
  </div>
{:else}
  <input
    class={`nes-input ${isDark} ${classes}`}
    placeholder={label}
    type='text'
    bind:value={value}
  />
{/if}