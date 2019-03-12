import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { MessageService } from '../message.service';
import { Message, Messages } from '../app.models';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {
  response;
  messages: Message[];

  subs: Subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = Messages;
    this.messageService.onConnect();

    // this.messageService.response.subscribe(
    //   success => console.log(success)
    // );
  }

  subscribeToMessages() {

    this.subs.add(

      this.messageService.message.subscribe(

        (message: Message) => this.messages.push(message),
        (error: Error) => console.log('Error: ', error)

      )
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
