<script>
  import CreateRoom from '../components/CreateRoom.svelte'
  import ManageRoom from '../components/ManageRoom.svelte'

  import { Rooms } from '../models'
  import { getUserId } from '../services/local'

  let myRooms = []
  const userId = getUserId()

  Rooms.watch(
    '/',
    true,
    (allRooms = []) => {
      myRooms = allRooms.filter(room => room.createdBy === userId)
    }
  )
</script>

<div>
  <CreateRoom />
  {#each myRooms as room}
    <ManageRoom {room} />
  {/each}
</div>
