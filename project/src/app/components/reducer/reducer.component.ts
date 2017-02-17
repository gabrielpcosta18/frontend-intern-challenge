import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-reducer',
  templateUrl: './reducer.component.html',
  styleUrls: ['./reducer.component.scss']
})

export class ReducerComponent {
  showRemoveButton: boolean = false;
  reductUrlButtonText: string = "ENCURTAR";
  inputTextValue: string = '';
  
  constructor(private ref: ChangeDetectorRef) { 
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);

  }

  reductUrlButtonClick(element) {
    if(this.inputTextValue !== '' && !this.showRemoveButton) {
      this.showRemoveButton = true;
      this.reductUrlButtonText = "COPIAR";
      this.encodeUrl();
    }
  }

  removeButtonClick() {
    this.showRemoveButton = false;
    this.inputTextValue = '';
    this.reductUrlButtonText = "ENCURTAR";
  }

  encodeUrl() {
    this.inputTextValue = "http://www.chr.dc/" + encodeURIComponent(btoa(this.inputTextValue)).substring(0, 5);
  }
}

