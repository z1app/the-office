<script>
	import Nav from '../components/Nav.svelte'
	import Meet from '../components/Meet.svelte'
	import Rooms from './Rooms.svelte'
	import Manage from './Manage.svelte'
	import { Users } from '../models'
	import { getUserId } from '../services/local'
	import { route } from '../services/store.js'

	let routeValue

	route.subscribe(value => {
		routeValue = value
	})

	let userId = getUserId()

	let collapsed = false
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

	function collapse () {
		collapsed = !collapsed
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
		width: 100%;
		background-color: white;
		padding: 1em;
		box-sizing: border-box;
	}
	.sidebar {
		display: inline-block;
		position: relative;
		width: 25vw;
		min-width: 400px;
		background-color: white;
		padding: 1em;
		box-sizing: border-box;
		transition: all 0.75s;
	}
	.login-notice {
		margin: auto;
		margin-top: 100px;
	}
	.meet-container {
		position: sticky;
		top: 20px;
	}
	.collapse {
		position: sticky;
    top: 20px;
		margin-top: 20px;
    height: 45px;
	}
	.collapsed {
		transform: translateX(-25vw);
		min-width: 0;
		width: 0;
		padding: 0;
		margin: 0;
		transition: all 0.75s;
	}
</style>

<Nav/>

<main>
	{#if userId}
    <div class="sidebar {collapsed ? 'collapsed' : ''}">
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
		<button
			type="button"
			class="nes-btn collapse"
    	on:click={collapse}
		>
			{#if collapsed}
				{'>'}
			{:else}
				{'<'}
			{/if}
		</button>
		<div class="meet">
			{#if activeRoom}
				<div class="nes-container with-title is-centered meet-container">
					<p class="title">sala: {activeRoomName}</p>
					<Meet {activeRoom}/>
				</div>
			{:else}
				<div class="nes-container with-title is-centered meet-container">
					<p class="title">sala: n/a</p>
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
