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
    console.log(this.showRemoveButton);
    this.showRemoveButton = !this.showRemoveButton;

    if(this.showRemoveButton) 
      this.reductUrlButtonText = "Copiar";
    else this.reductUrlButtonText = "Encurtar";

    //element.textContent = this.reductUrlButtonText;
  }

  removeButtonClick() {
    this.showRemoveButton = false;
    this.inputTextValue = '';
    this.reductUrlButtonText = "Encurtar";
  }
}

