import { Component, Input } from '@angular/core';

import { Message, MessageClass } from '../../app.models';

@Component({
	selector: 'app-dumb-message',
	templateUrl: './dumb-message.component.html',
	styleUrls: ['./dumb-message.component.css']
})
export class DumbMessageComponent {
	@Input() message: Message;
	@Input() messageClass: MessageClass;

}
