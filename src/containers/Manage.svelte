<script>
	import {
		Rooms,
	} from '../models'
	import {
		getUserId,
	} from '../services/local'
	import { 
		route,
	} from '../services/store.js'

	let roomName = ''

	function createRoom () {
		if (!roomName || roomName.length < 3) {
			window.alert('O nome de uma nova sala deve ter no mínimo 3 caracteres')
			return false
		}

		const uid = getUserId()
		return Rooms.create({
			name: roomName,
			createdBy: uid,
		})
			.then(() => {
				roomName = ''
				return route.update(() => 'list-rooms')
			})
	}

</script>

<style>
	.actions {
		padding-top: 15px;
	}
</style>

<div>
	<div class="nes-container with-title is-centered">
		<p class="title">Criar sala</p>
		<div class="nes-field">
			<label for="name_field">Nome</label>
			<input
				type="text"
				id="name_field"
				class="nes-input"
				bind:value={roomName}
			/>
		</div>
		<div class='actions'>
			<button
				type="button"
				class="nes-btn is-primary"
				on:click={createRoom}
			>
				Criar
			</button>
		</div>
	</div>
</div>