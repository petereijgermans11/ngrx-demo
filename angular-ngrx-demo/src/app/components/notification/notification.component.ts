import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  visible = true;
  text = '*** has been added';

  hideNotification() {
    console.log('hide notification');
  }
}
