<script>
	import Room from '../components/Room.svelte'
	import {
		Rooms,
	} from '../models'

	let rooms = []
	let loading = true
	
	export let activeRoom
	export let activeRoomName
	export let pinnedRooms

	Rooms.watch(
		'/',
		true,
		remoteRooms => {
			rooms = remoteRooms
			loading = false
		}
	)

	$: {
		rooms = [
			...rooms.filter(({ id }) => pinnedRooms[id]),
			...rooms.filter(({ id }) => !pinnedRooms[id]),
		]
	}

	
</script>

<div>
	{#if loading}
		<p>loading...</p>
	{:else}
		{#each rooms as room}
			<span>
				<Room
					name={room.name}
					users={room.users || {}}
					active={activeRoom === room.id}
					pinnedRoom={!!pinnedRooms[room.id]}
					id={room.id}
				/>
			</span>
		{/each}
	{/if}
</div>