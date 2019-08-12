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
    margin-left: -40px;
    margin-top: -80px;
    max-width: 200px;
    padding: 5px;
    position: absolute;
    text-align: center;
    visibility: hidden;
    word-wrap: break-word;
    z-index: 1;
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
  <div class="tooltiptext nes-balloon from-left nes-pointer">
    <p>
      {user.name}
    </p>
  </div>
</div>
