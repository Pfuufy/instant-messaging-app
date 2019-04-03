import { Injectable } from '@angular/core';

import { Users } from './app.models';

import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StateManageService {
	private _users = new BehaviorSubject<Users>(null);
	private _loggedIn = new BehaviorSubject<boolean>(false);

	loggedInObservable = this._loggedIn.asObservable();
	usersObservable = this._users.asObservable();

	constructor() { }

	loggedIn(val: boolean) {
		this._loggedIn.next(val);
	}

	setUsers(users: Users) {
		this._users.next(users);
	}

}
