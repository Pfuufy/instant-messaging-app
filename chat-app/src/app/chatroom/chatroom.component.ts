import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from '../message.service';
import { Message } from '../app.models';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {
  _messages: Message[] = [];

  _subs = new Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getInitMessages();
    this.getMessages();
  }

  getInitMessages(): void {

    this._subs.add(

      this.messageService.getInitMessages()

        .subscribe(
          (messages: Message[]) => this._messages = messages,
          (error: Error) => console.log('Error: ', error)
        )

    );
  }

  getMessages(): void {

    this._subs.add(

      this.messageService.receiveMessage()

        .subscribe(
          (message: Message) => this._messages.push(message),
          (error: Error) => console.log('Error: ', error)
        )

    );

  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

}
