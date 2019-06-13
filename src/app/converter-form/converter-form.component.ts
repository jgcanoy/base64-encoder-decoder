import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent implements OnInit {
  plainText = '';
  encodedText = '';

  constructor() {}
  
  ngOnInit() {}

  updateEncodedText(plainText: string) {
    this.encodedText = btoa(plainText);
  }

  updatePlainText(encodedText: string) {
    try {
      this.plainText = atob(encodedText);
    } catch (e) {
      this.plainText = '';
    }
  }
}
