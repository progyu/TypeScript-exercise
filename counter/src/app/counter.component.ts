import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div class="container">
     <app-increase
     (plus)="increase($event)"
     ></app-increase>
     <div class="counter">{{Count}}</div>
     <app-decrease
     (minus)="decrease($event)"
     ></app-decrease>
  </div>
  `,
  styles: [` .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: 20px auto;
    font-size: 24px;
    color: #3f51b5;
  }

  .counter {
    width: 50px;
    text-align: center;
  }`]
})
export class CounterComponent {
  private count = 0;

  increase() {
    return ++this.count;
  }

  decrease() {
    return this.count ? --this.count : 0;
  }

  get Count() {
    return this.count;
  }
}
