var app = new Vue({
  el: '#chat-app',
  data: {
    text: 'hello',
    messages: [],
  },
  mounted() {
    this.socket = io(window.location.href);

    this.socket.on('welcome', () => {
      this.messages.push({ text: 'Welcome to our chatroom.' });
    });

    this.socket.on('got-message', data => {
      this.messages.push({ text: data });
    });
  },
  methods: {
    sendText() {
      this.socket.emit('new-text', this.text);
    }
  }
});
