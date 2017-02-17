import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UrlItem } from '../shared/url-item';
import { UrlItemDataService } from '../shared/url-item-data.service';

@Component({
  selector: 'app-hits-container',
  templateUrl: './hits-container.component.html',
  styleUrls: ['./hits-container.component.scss']
})

export class HitsContainerComponent implements OnInit {
  urlItems: UrlItem[] = [];
  totalClicks: number;

  constructor(private _urlItemDataService:UrlItemDataService) {
    this._urlItemDataService.getAllUrlItems().subscribe(this.onDataUpdate.bind(this));
  }

  ngOnInit() { 
    if(this.urlItems.length == 0)
     this._urlItemDataService.getAllUrlItems().subscribe(this.onDataUpdate.bind(this)); 
  }

  onDataUpdate(data: any) {
      this.urlItems = data; 
      this.totalClicks = this.getTotalClicks();
  }

  getTotalClicks(): number {
    var count: number = 0;
    for(var i = 0; i < this.urlItems.length; ++i) {
        count += this.urlItems[i].hits;
    }

    return count;
  }
}

