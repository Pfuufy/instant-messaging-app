import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { StateManageService } from '../state-manage.service';

@Component({
	selector: 'app-enter-chat',
	templateUrl: './enter-chat.component.html',
	styleUrls: ['./enter-chat.component.css']
})
export class EnterChatComponent implements OnInit {
	_enterScreenForm: FormGroup;

	constructor(private fb: FormBuilder,
				private stateManageService: StateManageService,
				private router: Router) { }

	ngOnInit() {
		this.initEnterScreenForm();
	}

	initEnterScreenForm(): void {
		this._enterScreenForm = this.fb.group({
			userName: [null, Validators.required],
			friendUserName: [null, Validators.required]
		});
	}

	submitEnterScreenForm(): void {
		this.stateManageService.loggedIn(true);
		this.stateManageService.setUsers(this._enterScreenForm.value);
		this.router.navigateByUrl('/chatroom');
	}

}
