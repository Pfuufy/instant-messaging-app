from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

saved_messages = []

@socketio.on('client connecting')
def init_messages(methods=['GET', 'POST']):
    socketio.emit('sending saved messages', saved_messages)

@socketio.on('message sending')
def send_message(message, methods=['GET', 'POST']):
    socketio.emit('message sent', message)
    saved_messages.append(message)
    

if __name__ == '__main__':
    print('Server running')
    socketio.run(app)
    # Port 5000