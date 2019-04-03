import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EnterChatComponent } from './enter-chat/enter-chat.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { EnterMessageComponent } from './enter-message/enter-message.component';
import { SmartMessageComponent } from './message/smart-message/smart-message.component';
import { DumbMessageComponent } from './message/dumb-message/dumb-message.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const config: SocketIoConfig = ({ url: 'http://localhost:5000', options: {} });

const appRoutes: Routes = [
	{ path: '', component: EnterChatComponent },
	{ path: 'login', component: EnterChatComponent },
	{ path: 'chatroom', component: ChatroomComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		EnterChatComponent,
		ChatroomComponent,
		SmartMessageComponent,
		EnterMessageComponent,
		DumbMessageComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		SocketIoModule.forRoot(config),
		ReactiveFormsModule,
		AngularFontAwesomeModule
	],
	exports: [
		RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
