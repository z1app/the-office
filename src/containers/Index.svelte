<script>
	import Nav from '../components/Nav.svelte'
	import Meet from '../components/Meet.svelte'
	import Rooms from './Rooms.svelte'
	import {
		Users,
	} from '../models'
	import {
    getUserId,
	} from '../services/local'
	
	let userId = getUserId()

	let activeRoom = false

	Users.watch(
		`/${userId}`,
		false,
		remoteUser => {
			activeRoom = remoteUser.activeRoom
		}
	)
	if (userId) {
		Users.onDisconect(userId)
	}
</script>

<style>
	main {
		display: flex;
		justify-content: flex-start;
	}
	.meet {
		display: inline-block;
		position: relative;
		max-width: 75vw;
		width: 100%;
		background-color: white;
		padding: 2em;
		box-sizing: border-box;
	}
	.sidebar {
		display: inline-block;
		position: relative;
		width: 25vw;
		min-width: 400px;
		background-color: white;
		padding: 2em;
		box-sizing: border-box;
	}
	.login-notice {
		margin: auto;
		margin-top: 100px;
	}
</style>

<Nav/>

<main>
	{#if userId}
    <div class="sidebar">
			<Rooms {activeRoom}></Rooms>
		</div>
		<div class="meet">
			{#if activeRoom}
				<div class="nes-container with-title is-centered">
					<p class="title">Sala: {activeRoom}</p>
					<Meet {activeRoom}/>
				</div>
			{:else}
				<div class="nes-container with-title is-centered">
					<p class="title">Sala: N/A</p>
					<p>Selecione uma das salas para poder conversar</p>
				</div>
			{/if}
		</div>
  {:else}
    <div class="login-notice nes-container is-centered">
			<p>Para prosseguir por favor faça o login.</p>
		</div>
  {/if}
	
</main>