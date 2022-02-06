import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter: number = 0;
  stepSize: number = 1;

  increment() {
    this.counter += this.stepSize;
  }

  decrement() {
    this.counter -= this.stepSize;
  }

  increaseStepSize() {
    this.stepSize++;
  }

  decreaseStepSize() {
    if (this.stepSize > 1) {
      this.stepSize--;
    }
  }
}
