import { Component, OnInit, OnDestroy } from '@angular/core';

import { StateManageService } from '../state-manage.service';
import { MessageService } from '../message.service';
import { Message, Users } from '../app.models';

import { Subscription } from 'rxjs';

@Component({
	selector: 'app-chatroom',
	templateUrl: './chatroom.component.html',
	styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {
	_messages: Message[] = [];

	users: Users;

	private _subs = new Subscription();

	constructor(private messageService: MessageService, private stateManageService: StateManageService) { }

	ngOnInit() {
		this.getUsers();
		this.getInitMessages();
		this.listenForNewMessages();
	}

	getUsers(): void {
		this._subs.add(

			this.stateManageService.usersObservable.subscribe(

				(users: Users) => this.users = users,
				(error: Error) => console.log('Error: ', error)

			)

		);
	}

	getInitMessages(): void {
		this._subs.add(

			this.messageService.getInitMessages().subscribe(

				(messages: Message[]) => this._messages = messages,
				(error: Error) => console.log('Error: ', error)

			)

		);
	}

	listenForNewMessages(): void {
		this._subs.add(

			this.messageService.receiveMessage().subscribe(

				(message: Message) => this._messages.push(message),
				(error: Error) => console.log('Error: ', error)

			)

		);
	}

	ngOnDestroy(): void {
		this._subs.unsubscribe();
	}

}
