import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enter-chat',
  templateUrl: './enter-chat.component.html',
  styleUrls: ['./enter-chat.component.css']
})
export class EnterChatComponent implements OnInit {
  enterScreenForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initEnterScreenForm();
  }

  initEnterScreenForm(): void {
    this.enterScreenForm = this.fb.group({
      username: [null, [Validators.required]],
      friendUserName: [null, [Validators.required]]
    });
  }

  submitEnterScreenForm(): void {
    console.log('submitEnterScreenForm()');
  }

}
