import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-reducer',
  templateUrl: './reducer.component.html',
  styleUrls: ['./reducer.component.scss']
})

export class ReducerComponent {
  showRemoveButton: boolean = false;
  reductUrlButtonText: string = "Encurtar";
  inputTextValue: string = '';
  
  constructor(private ref: ChangeDetectorRef) { 
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 500);

  }

  reductUrlButtonClick(element) {
    if(this.inputTextValue !== '') {
      this.showRemoveButton = true;
      this.reductUrlButtonText = "Copiar";
    }
  }

  removeButtonClick() {
    this.showRemoveButton = false;
    this.inputTextValue = '';
    this.reductUrlButtonText = "Encurtar";
  }
}

