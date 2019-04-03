import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { StateManageService } from './state-manage.service';

import { Subscription } from 'rxjs';
import { Users } from './app.models';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	private _loggedIn = false;
	private _users: Users;

	private _subs = new Subscription();

	constructor(private stateManageService: StateManageService, private router: Router) {}

	ngOnInit() {
		this.loadBaseRoute();
		this.listenForLogIn();
	}

	loadBaseRoute(): void {
		this.router.navigateByUrl('/');
	}

	listenForLogIn(): void {
		this._subs.add(

			this.stateManageService.loggedInObservable.subscribe(

				(val: boolean) => this._loggedIn = val,
				(error: Error) => console.log('Error: ', error)

			)

		);

	}

	ngOnDestroy() {
		this._subs.unsubscribe();
	}

}
