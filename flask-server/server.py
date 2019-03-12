from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")
 render_template('main.html')

@socketio.on('client connecting')
def handle_client_connecting(methods=['GET', 'POST']):
    socketio.emit('client connected', 
                  'You are successfully connected to the server!')
    print ('Client connected')

@socketio.on('message sending')
def send_message(message, sender, methods=['GET', 'POST']):
    socketio.emit('message sent')
    

if __name__ == '__main__':
    socketio.run(app)
    # Port 5000