<script>
  export let user
</script>

<style>
  img {
    border: 1px solid gray;
    margin: 5px;
  }

  div {
    display: inline-block;
  }

  div .tooltiptext {
    visibility: hidden;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    margin-top: -135px;
    margin-left: -5px;
    padding: 3px;
  }

  div:hover .tooltiptext {
    visibility: visible;
  }
</style>

<div>
  <img
    class="nes-avatar is-rounded is-large"
    src={user.picture}
    alt={user.name}
    style="image-rendering: pixelated;"
  />
  <p class="nes-text is-success tooltiptext nes-balloon from-left nes-pointer">{user.name}</p>
</div>
