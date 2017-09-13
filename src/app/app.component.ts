import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date;
  time;
  showTime: boolean = true;
  timezone: string = 'PST';
  clicked: boolean[] = [false, false, false, false];

  lastClicked(index=-1) {
    for (var i = 0; i < this.clicked.length; i++) {
      if (i !== index) {
        this.clicked[i] = false;
      } else {
        this.clicked[i] = true;
      }
    }
  }

  getTime(offset) {
    var today = new Date();
    today.setHours(today.getHours() + offset);
    this.date = today.toLocaleDateString();
    this.time = today.toLocaleTimeString();
  }
}
