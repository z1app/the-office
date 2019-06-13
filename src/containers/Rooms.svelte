<script>
	import Room from '../components/Room.svelte'
	import {
		Rooms,
	} from '../models'

	let rooms = []
	
	export let activeRoom

	Rooms.watch(
		'/',
		true,
		remoteRooms => {
			rooms = remoteRooms
		}
	)

	
</script>

<div>
	{#each rooms as room}
		<span>
			<Room
				name={room.name}
				users={room.users || {}}
				active={activeRoom === room.name}
			/>
		</span>
	{/each}
</div>