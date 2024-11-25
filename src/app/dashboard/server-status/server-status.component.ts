import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'offline' | 'online' | 'unknown' = 'offline';
  //private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef)
  constructor() {

  }
  /*ngOnDestroy(): void {
    clearTimeout(this.interval)
  }*/

  ngOnInit(): void {
    const interval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        this.currentStatus = 'online';
      } else if (rand < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }
  ngAfterViewInit() {
    console.log("AFTER View INIT");
  }
}
