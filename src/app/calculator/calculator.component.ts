import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public number1: number;
  public number2: number;
  public result: number;

  constructor() { }

  ngOnInit() {
  }

  addition() {
    this.result = this.number1 + this.number2;
  }

  subtract() {
    this.result = (this.number1) - (this.number2);
  }

  divide() {
    this.result = (this.number1) / (this.number2);
  }

  multiply() {
    this.result = (this.number1) * (this.number2);
  }

}
