import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enter-message',
  templateUrl: './enter-message.component.html',
  styleUrls: ['./enter-message.component.css']
})
export class EnterMessageComponent implements OnInit {

  messageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initMessageForm();
  }

  initMessageForm() {
    this.messageForm = this.fb.group({
      message: [null]
    });
  }

  sendMessage(form: FormGroup) {
    console.log(form.value);
    this.messageForm.reset();
  }

}
