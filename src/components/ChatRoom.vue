<template>
  <div class="chat-room">
    <!-- Chat Room Header: Avatar and Room Name -->
    <div class="chat-header">
      <img :src="room.user_avatar_url" alt="Avatar" class="avatar" />
      <p class="room-name">{{ room.name }}</p>
    </div>

    <!-- Display Chat Messages -->
    <div class="messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message', message.isSent ? 'sent' : 'received']"
      >
        <div class="message-text">{{ message.text }}</div>
      </div>
    </div>

    <!-- Message Input Form -->
    <div class="input-area">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type a message"
        @keyup.enter="sendMessage"
        :disabled="isMessageEmpty"
      />
      <button @click="sendMessage" :disabled="isMessageEmpty">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    room: Object, // Room data passed from the parent component (selected room)
  },
  data() {
    return {
      newMessage: '', // Stores the current message being typed
      messages: [], // Stores the chat messages for the selected room
    }
  },
  computed: {
    // Disable the send button if the message is empty or just whitespace
    isMessageEmpty() {
      return this.newMessage.trim() === ''
    },
  },
  methods: {
    // Add the new message to the chat and reset the input field
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        // Add new message to the messages array
        this.messages.push({
          text: this.newMessage,
          isSent: true, // Mark the message as sent
        })
        this.newMessage = '' // Clear the input field
      }
    },
  },
  created() {
    // Simulate loading messages when the room is selected (replace with actual API or dynamic data)
    if (this.room) {
      const initialMessages = [
        { text: 'Hello! How can I assist you?', isSent: false },
        { text: 'I need help with my order.', isSent: true },
        { text: 'Sure! Let me check the status of your order.', isSent: false },
      ]
      this.messages = initialMessages // Set the initial messages for the room
    }
  },
}
</script>

<style scoped>
.chat-room {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
}

.chat-header {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.chat-header .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-header .room-name {
  font-weight: bold;
  font-size: 18px;
}

.messages {
  flex-grow: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.message .message-text {
  max-width: 60%;
  padding: 8px;
  border-radius: 12px;
  font-size: 14px;
}

.message.sent .message-text {
  background-color: #4caf50; /* Green background for sent messages */
  color: white;
  align-self: flex-end; /* Align sent messages to the right */
}

.message.received .message-text {
  background-color: #e0e0e0; /* Light gray background for received messages */
  color: black;
  align-self: flex-start; /* Align received messages to the left */
}

.input-area {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

input {
  width: 80%;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #ddd;
}

button {
  width: 15%;
  padding: 10px;
  border-radius: 12px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
