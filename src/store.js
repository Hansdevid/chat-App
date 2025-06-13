import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [], // List of rooms
    currentRoom: null, // Current selected room
    messages: [], // List of messages in the current room
  },

  mutations: {
    // Set all rooms in the store
    setRooms(state, rooms) {
      state.rooms = rooms
    },

    // Set the current selected room
    setCurrentRoom(state, room) {
      state.currentRoom = room
    },

    // Set messages for the current selected room
    setMessages(state, messages) {
      state.messages = messages
    },

    // Add a new message to the current room's message list
    addMessage(state, message) {
      state.messages.push(message)
    },

    // Clear messages for the current room
    clearMessages(state) {
      state.messages = []
    },
  },

  actions: {
    // Load the rooms from JSON or API
    loadRooms({ commit }) {
      // Simulating an API call or local JSON data
      const roomsData = [
        {
          room_id: '313621130',
          name: 'Chandler.Muller3',
          user_avatar_url: 'https://latest-multichannel.qiscus.com/img/default_avatar.svg',
          last_comment_text: 'agent test joined this conversation',
        },
        {
          room_id: '313621108',
          name: 'Angus_Lind',
          user_avatar_url: 'https://latest-multichannel.qiscus.com/img/default_avatar.svg',
          last_comment_text: 'Greenholttown',
        },
        {
          room_id: '313621084',
          name: 'Bridget.Rath54',
          user_avatar_url: 'https://latest-multichannel.qiscus.com/img/default_avatar.svg',
          last_comment_text: 'North Jamilmouth',
        },
      ]

      commit('setRooms', roomsData) // Set rooms data into Vuex store
    },

    // Set the currently selected room
    selectRoom({ commit }, room) {
      commit('setCurrentRoom', room)
      // Load messages for the selected room (this can be dynamic later)
      const messages = [
        { text: 'Hello, how can I help you?', isSent: false },
        { text: 'I need assistance with my order.', isSent: true },
        { text: 'Sure, I will check your order details.', isSent: false },
      ]
      commit('setMessages', messages) // Set the messages for the selected room
    },

    // Add a new message to the store
    sendMessage({ commit }, message) {
      commit('addMessage', message)
    },

    // Clear all messages from the store (can be used for resetting or leaving a room)
    clearMessages({ commit }) {
      commit('clearMessages')
    },
  },

  getters: {
    // Get the list of rooms
    getRooms(state) {
      return state.rooms
    },

    // Get the current selected room
    getCurrentRoom(state) {
      return state.currentRoom
    },

    // Get the messages of the current room
    getMessages(state) {
      return state.messages
    },
  },
})
