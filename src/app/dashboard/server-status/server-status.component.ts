import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  // host: {
  //   class: 'status',
  // },
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unKnown' = 'online';

  constructor() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.5) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unKnown';
      }
    }, 5000);
  }
}
