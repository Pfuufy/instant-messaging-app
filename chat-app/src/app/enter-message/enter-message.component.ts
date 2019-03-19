import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { Message } from '../app.models';

@Component({
  selector: 'app-enter-message',
  templateUrl: './enter-message.component.html',
  styleUrls: ['./enter-message.component.css']
})
export class EnterMessageComponent implements OnInit {

  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService) { }

  ngOnInit() {
    this.initMessageForm();
  }

  initMessageForm() {
    this.messageForm = this.fb.group({
      message: [null, [Validators.required]],
      sender: [null, [Validators.required]]
    });
  }

  sendMessage(form: FormGroup) {
    const message: Message = form.value;
    this.messageService.sendMessage(message);
    this.messageForm.patchValue({
      message: ''
    });
  }

}
