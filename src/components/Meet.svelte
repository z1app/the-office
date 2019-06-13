<script>
  import { onMount } from 'svelte'
  
  export let activeRoom
  
  let meetDiv

  onMount(() => {
    function getMeetingOptions(roomId) {
      return {
        roomName: roomId,
        width: "100%",
        height: "80%",
        parentNode: meetDiv,
        interfaceConfigOverwrite: {
          TOOLBAR_BUTTONS: [
            'camera',
            'desktop',
            'fullscreen',
            'fodeviceselection',
            'profile',
            'settings',
            'videoquality',
            'filmstrip',
            'stats',
            'shortcuts',
            'tileview',
            'chat',
            'recording',
            'microphone',
            'hangup',
            'etherpad',
            'sharedvideo',
            'raisehand',
          ],
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_BRAND_WATERMARK: false,
        }
      }
    }

    const domain = 'meet.jit.si'
    const options = getMeetingOptions(`escritorio-pagarme-${activeRoom}`)
    // const { user } = localState
    setTimeout(() => {
      const meet = new JitsiMeetExternalAPI(domain, options)
      meet._frame.style.height = 'calc(100vh - 170px)'
    }, 1000)
    // meet.executeCommand('displayName', user.username)
  })
  
</script>

<style>
  div {
    min-height: 100%;
  }
</style>

<div
  bind:this={meetDiv}
/>

