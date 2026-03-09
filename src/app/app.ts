import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inputString = '';
  result: number | null = null;

  calculate() {
    const s = this.inputString;
    if (!s) {
      this.result = 0;
      return;
    }
    const isPalindrome = (str: string) => str === str.split('').reverse().join('');
    if (!isPalindrome(s)) {
      this.result = 0;
      return;
    }
    const allSame = s.split('').every(c => c === s[0]);
    this.result = allSame ? s.length : 1;
  }
}
