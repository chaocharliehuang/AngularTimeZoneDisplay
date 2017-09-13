import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today;
  timezone;
  showTime: boolean = true;

  getTime(offset) {
    this.today = new Date();
    this.today.setHours(this.today.getHours() + offset);
    if (offset === 0) {
      this.timezone = 'PST';
    } else if (offset === 1) {
      this.timezone = 'MST';
    } else if (offset === 2) {
      this.timezone = 'CST';
    } else {
      this.timezone = 'EST';
    }
  }
}
