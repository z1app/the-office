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
		const globalyPinnedRooms = rooms
		  .filter(({ globalyPinnedRoom }) => !!globalyPinnedRoom)

		const localPinnedRooms = rooms
			.filter(({ id, globalyPinnedRoom }) => pinnedRooms[id] && !globalyPinnedRoom)

		const notPinnedRooms = rooms
			.filter(({ id, globalyPinnedRoom }) => !pinnedRooms[id] && !globalyPinnedRoom)

		rooms = [
			...globalyPinnedRooms,
			...localPinnedRooms,
			...notPinnedRooms,
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
					globalyPinnedRoom={room.globalyPinnedRoom}
				/>
			</span>
		{/each}
	{/if}
</div>
