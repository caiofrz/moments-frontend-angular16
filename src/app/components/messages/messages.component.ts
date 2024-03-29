import { Component, OnInit } from '@angular/core';
import { FeedbackMessagesService } from 'src/app/services/feedback-messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(
    public feedbackMessageService: FeedbackMessagesService
  ) {}

  ngOnInit() {
  }
}
