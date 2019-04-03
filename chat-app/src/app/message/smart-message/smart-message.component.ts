import { Component, OnInit, Input } from '@angular/core';

import { Message, Users, MessageClass } from '../../app.models';

@Component({
	selector: 'app-smart-message',
	templateUrl: './smart-message.component.html',
	styleUrls: ['./smart-message.component.css']
})
export class SmartMessageComponent implements OnInit {
	@Input() message: Message;
	@Input() users: Users;

	messageClass: string;

	constructor() { }

	ngOnInit() {
		this.setMessageClass();
	}

	setMessageClass(): void {
		if (this.message.sender === this.users.userName) {
			this.messageClass = MessageClass.YOU;
		} else {
			this.messageClass = MessageClass.THEM;
		}
	}

}
