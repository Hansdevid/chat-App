<template>
  <div class="room-list">
    <!-- Loop through each room in the rooms array and display them -->
    <div
      v-for="room in rooms"
      :key="room.room_id"
      :class="['room-item', { selected: room.room_id === selectedRoomId }]"
      @click="selectRoom(room)"
    >
      <!-- Avatar of the user -->
      <img :src="room.user_avatar_url" alt="Avatar" class="avatar" />

      <!-- Room details: Name and last message -->
      <div class="room-details">
        <p class="room-name">{{ room.name }}</p>
        <p class="last-message">{{ room.last_comment_text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // Access rooms from the Vuex store
    rooms() {
      return this.$store.getters.getRooms
    },
    // Get the ID of the currently selected room
    selectedRoomId() {
      return this.$store.getters.getCurrentRoom ? this.$store.getters.getCurrentRoom.room_id : null
    },
  },
  methods: {
    // Dispatch action to set the selected room in the Vuex store
    selectRoom(room) {
      this.$store.dispatch('selectRoom', room)
    },
  },
}
</script>

<style scoped>
.room-list {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.room-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Highlight the room when hovered */
.room-item:hover {
  background-color: #f5f5f5;
}

/* Style for selected room */
.room-item.selected {
  background-color: #4caf50; /* Green background for selected room */
  color: white;
}

/* Avatar styling */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Room details styling */
.room-details {
  margin-left: 10px;
}

.room-name {
  font-weight: bold;
}

.last-message {
  color: #777;
}
</style>
