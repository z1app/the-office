<script>
	import Login from '../containers/Login.svelte'
	import { route } from '../services/store.js'

	function updateRoute (name) {
		return () => route.update(() => name)
	}

	let routeValue

	route.subscribe(value => {
		routeValue = value
	})
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none !important;
		padding: 1em 0.5em;
		display: block;
	}

	.f-right {
		float: right;
	}

	.default-link {
		display: inline-block;
	}

	.nes-icon.is-medium {
		top: -16px;
		margin-right: 32px;
    margin-bottom: 0px;
    transform: scale(3);
	}
</style>

<nav>
	<ul>
		<li>
			<a
				class:selected={routeValue === 'list-rooms'}
				on:click={updateRoute('list-rooms')}
				href="#"
			>
				salas
			</a>
		</li>
		<li>
			<a
				on:click={updateRoute('create-room')}
				class:selected={routeValue === 'create-room'}
				href="#"
			>
				gerenciar
			</a>
		</li>
		<li class="f-right">
			<a
				class="default-link"
				href="https://github.com/lucianopf/escritorio-pagarme"
				target="_blank"
			>
				<i class="nes-icon github is-medium"></i>
			</a>
			<Login/>
		</li>
	</ul>
</nav>
