import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from '../message.service';
import { Users } from '../app.models';

@Component({
	selector: 'app-enter-message',
	templateUrl: './enter-message.component.html',
	styleUrls: ['./enter-message.component.css']
})
export class EnterMessageComponent implements OnInit {
	@Input() users: Users;

	_messageForm: FormGroup;

	constructor(private fb: FormBuilder,
				private messageService: MessageService) { }

	ngOnInit() {
		this.initMessageForm();
	}

	initMessageForm(): void {
		this._messageForm = this.fb.group({
			message: [null, Validators.required],
		});
	}

	sendMessage(form: FormGroup): void {
		const message = form.value.message;

		this.messageService.sendMessage({
			message: message,
			sender: this.users.userName
		});

		this._messageForm.patchValue({
			message: ''
		});
	}

}
