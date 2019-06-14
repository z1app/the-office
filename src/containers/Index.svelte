<script>
	import Nav from '../components/Nav.svelte'
	import Meet from '../components/Meet.svelte'
	import Rooms from './Rooms.svelte'
	import Manage from './Manage.svelte'
	import {
		Users,
	} from '../models'
	import {
    getUserId,
	} from '../services/local'
	import { route } from '../services/store.js'

	let routeValue

	route.subscribe(value => {
		routeValue = value
	})
	
	let userId = getUserId()

	let activeRoom = false
	let activeRoomName = ''
	let pinnedRooms = {}

	Users.watch(
		`/${userId}`,
		false,
		remoteUser => {
			activeRoom = remoteUser.activeRoom
			activeRoomName = remoteUser.activeRoomName
			pinnedRooms = remoteUser.pinnedRooms || {}
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
			{#if routeValue === 'list-rooms'}
				<Rooms
					{activeRoomName}
					{activeRoom}
					{pinnedRooms}
				/>
			{:else}
				<Manage />
			{/if}
			
		</div>
		<div class="meet">
			{#if activeRoom}
				<div class="nes-container with-title is-centered">
					<p class="title">Sala: {activeRoomName}</p>
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