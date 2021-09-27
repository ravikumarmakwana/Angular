import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Directives';
  isOdd: boolean = true;

  evenNumbers: number[] = [2, 4, 6, 8, 10];
  oddNumbers: number[] = [1, 3, 5, 7, 9];

  getEvenColor() {
    return 'red';
  }

  getOddColor() {
    return 'yellow';
  }
}
