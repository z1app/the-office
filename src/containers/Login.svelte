<script>
  import { authWithGoogle, getUser, authLogout } from '../services/firebase'

  import {
    setUserProfile,
    setUserId,
    getUserId,
    clearUser,
  } from '../services/local'

  import { Users } from '../models'

  const allowedDomains = [
    'pagar.me',
    'stone.co',
    'stone.com.br',
    'mundipagg.com',
  ]

  function login() {
    return authWithGoogle()
      .then(response => {
        const { profile } = response.additionalUserInfo
        const { name, email, picture } = profile

        const emailDomain = email.split('@').pop()

        if (!emailDomain || !allowedDomains.includes(emailDomain)) {
          setTimeout(() => {
            window.alert(`Desculpe mas apenas aceitamos login usando os seguintes domínios: ${allowedDomains.join(', ')}`)
          }, 100)
          throw new Error('Failed to Login')
        }
        const { uid } = response.user
        const userProfile = {
          name: name,
          email: email,
          picture: picture,
          id: uid,
        }
        setUserProfile(userProfile)
        setUserId(uid)
        logged = true
        return Users.update(uid, userProfile)
      })
      .then(() => window.location.reload())
  }

  function logout() {
    clearUser()
    logged = false
    return authLogout().then(() => window.location.reload())
  }

  let logged = !!getUserId()
</script>

{#if logged}
  <button type="button" class="nes-btn is-error" on:click={logout}>
    logout
  </button>
{:else}
  <button type="button" class="nes-btn" on:click={login}>login</button>
{/if}
