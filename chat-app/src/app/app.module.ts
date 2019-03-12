import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterChatComponent } from './enter-chat/enter-chat.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { EnterMessageComponent } from './enter-message/enter-message.component';
import { SmartMessageComponent } from './message/smart-message/smart-message.component';
import { DumbMessageComponent } from './message/dumb-message/dumb-message.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

const config: SocketIoConfig = ({ url: 'http://localhost:5000', options: {} });

@NgModule({
  declarations: [
    AppComponent,
    EnterChatComponent,
    ChatroomComponent,
    SmartMessageComponent,
    EnterMessageComponent,
    DumbMessageComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
