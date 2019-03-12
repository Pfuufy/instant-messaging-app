import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../../app.models';

@Component({
  selector: 'app-dumb-message',
  templateUrl: './dumb-message.component.html',
  styleUrls: ['./dumb-message.component.css']
})
export class DumbMessageComponent implements OnInit {
  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
