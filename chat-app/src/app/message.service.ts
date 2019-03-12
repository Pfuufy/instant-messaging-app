import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Socket } from 'ngx-socket-io';

import { Message, Messages } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // response = this.socket.fromEvent('client connected');

  private _messageSource = new Subject<Message>();
  message = this._messageSource.asObservable();


  constructor(private socket: Socket) { }

  onConnect(): void {
    this.socket.emit('client connecting');
    this.socket.fromEvent('client connected')
      .subscribe(

        (response) => console.log(response)

      );
  }

  sendMessage(message: Message): void {
    this.socket.emit('sending message', message);
  }

}
