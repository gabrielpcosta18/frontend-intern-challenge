import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UrlItem } from '../shared/url-item';
import { UrlItemDataService } from '../shared/url-item-data.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})

export class RankingComponent implements OnInit {
  urlItems: UrlItem[] = [];

  constructor(private _urlItemDataService:UrlItemDataService) {
  }

  ngOnInit() {
    this._urlItemDataService.getAllUrlItems().subscribe(
      items => {
        this.urlItems = items;
        this.urlItems = this.getFiveFirstUrlItems();
      },
      error => console.log('Error'));
  }

  getFiveFirstUrlItems() {
    return this.urlItems.sort(function(a: UrlItem, b: UrlItem) {
      return ((a.hits < b.hits)? 1: 0);
    }).splice(5);
  }
}

