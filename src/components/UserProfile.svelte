<script>
	export let user
</script>

<style>
  img {
    border: 1px solid gray;
    margin: 5px;
  }
</style>

<img
  class="nes-avatar is-rounded is-large"
  src={user.picture}
  alt={user.name} 
  style="image-rendering: pixelated;"
/>