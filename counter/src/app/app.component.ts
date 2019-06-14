import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="container">
      <button class="increase" (click)="increase(num)">+</button>
      <div class="counter">{{num}}</div>
      <button class="decrease" (click)="decrease(num)">-</button>
    </div>
    
  `,
  styles: [`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
    margin: 20px auto;
    font-size: 24px;
    color: #3f51b5;
  }

  button {
    padding: 5px 10px;
    font-size: 24px;
    border-radius: 5px;
    color: #3f51b5;
    border-color: #3f51b5;
    outline: none;
    cursor: pointer;
  }

  .counter {
    width: 50px;
    text-align: center;
  }
  `]
})
export class AppComponent {
  // title = 'counter';
  num: number = 0;

  increase(count: number) {
    this.num = ++count;
  }

  decrease(count: number) {
    this.num = count ? --count : 0;
  }
}
