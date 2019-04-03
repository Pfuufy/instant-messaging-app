import { Injectable } from '@angular/core';

import { Message } from './app.models';

import { Socket } from 'ngx-socket-io';
import { Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MessageService {

	constructor(private socket: Socket) { }

	getInitMessages(): Observable<Message[]> {
		this.socket.emit('client connecting');
		return this.socket.fromEvent('sending saved messages');
	}

	sendMessage(message: Message): void {
		this.socket.emit('message sending', message);
	}

	receiveMessage(): Observable<Message> {
		return this.socket.fromEvent('message sent');
	}

}
