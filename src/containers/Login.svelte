<script>
	import {
		authWithGoogle,
		getUser,
		authLogout,
	} from '../services/firebase'

	import {
		setUserProfile,
		setUserId,
		getUserId,
		clearUser,
	} from '../services/local'

	import {
		Users,
	} from '../models'

	function login () {
		return authWithGoogle()
			.then(response => {
				const { profile } = response.additionalUserInfo
				const { uid } = response.user
				const userProfile = {
					name: profile.name,
					email: profile.email,
					picture: profile.picture,
					id: uid,
				}
				setUserProfile(userProfile)
				setUserId(uid)
				logged = true
				return Users.update(uid, userProfile)
			})
			.then(() => window.location.reload())
	}

	function logout () {
		clearUser()
		logged = false
		return authLogout()
			.then(() => window.location.reload())
	}

	let logged = !!getUserId()

</script>

{#if logged}
	<button
		type="button"
		class="nes-btn is-error"
		on:click={logout}
	>
		logout
	</button>
{:else}
	<button
		type="button"
		class="nes-btn"
		on:click={login}
	>
		login
	</button>
{/if}