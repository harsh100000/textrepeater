import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private toastr: ToastrService) { }

  inputText: string = '';
  times: number = 10;
  outputText: string = '';

  repeat() {
    this.outputText = Array(this.times).fill(this.inputText).join('\n');
  }

  copyText() {
    const textarea = document.createElement('textarea');
    textarea.value = this.outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    if (textarea.value) {
      this.toastr.success('', 'Copy to clipboard', {
        timeOut: 2500,
      });
    }
  }

  clearText() {
    this.inputText = '';
  }

  clearOutput() {
    this.outputText = '';
  }

}
