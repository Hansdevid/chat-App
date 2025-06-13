<template>
  <div id="app">
    <!-- Room list section -->
    <div class="room-list-container">
      <RoomList />
    </div>

    <!-- Chat room section -->
    <div v-if="currentRoom" class="chat-room-container">
      <ChatRoom :room="currentRoom" />
    </div>

    <!-- No room selected message -->
    <div v-else class="no-room-message">
      <p>Please select a room to start chatting.</p>
    </div>
  </div>
</template>

<script>
import RoomList from './components/RoomList.vue' // Import the RoomList component
import ChatRoom from './components/ChatRoom.vue' // Import the ChatRoom component

export default {
  name: 'App',
  components: {
    RoomList,
    ChatRoom,
  },
  computed: {
    // Get the currently selected room from Vuex
    currentRoom() {
      return this.$store.getters.getCurrentRoom
    },
  },
  mounted() {
    // Load the rooms when the app is mounted (this simulates fetching from an API)
    this.$store.dispatch('loadRooms')
  },
}
</script>

<style>
#app {
  display: flex;
  height: 100vh;
}

.room-list-container {
  width: 30%;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
  padding: 20px;
  overflow-y: auto;
}

.chat-room-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.no-room-message {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-size: 18px;
  color: #888;
}
</style>
