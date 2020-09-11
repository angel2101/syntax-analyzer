import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-code',
  templateUrl: './input-code.component.html',
  styleUrls: ['./input-code.component.css']
})
export class InputCodeComponent implements OnInit {
  code = [];
  tokensForTxt = [];
  tokens = [];
  tokenErrors = [];

  constructor() { }

  ngOnInit(): void {
  }

  uploadFile(event: any): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.code = [];

    if (!file) {
      return;
    }
    const secondThis = this;
    const reader = new FileReader();
    // tslint:disable-next-line: no-shadowed-variable
    reader.onload = (event: any) => {
      const contend = event.target.result;
      secondThis.showTxtContent(contend);
      secondThis.keepCode(contend);
    };
    reader.readAsText(file);
  }

  keepCode(code: string) {
    this.code = code.split('\n');
    this.tokens = [];
    this.tokenErrors = [];
    this.tokensForTxt = [];

    for (let i = 0; i < this.code.length; i++) {
      if (this.code[i].length === 0) {
        this.code.splice(i, 1);
      }
    }

    // this.analyzeCode();
  }

  showTxtContent(contend: any) {
    const element = document.getElementById('userCode');
    element.innerHTML = contend;
  }
}
