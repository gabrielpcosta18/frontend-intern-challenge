import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UrlItem } from './url-item';
import 'rxjs/add/operator/map';


@Injectable()
export class UrlItemDataService {
  baseUrl: string;

  urlItems: UrlItem[] = [];
  
  constructor(private http:Http) {
    this.baseUrl = "/assets/urls.json";
  }

  getAllUrlItems(): Observable<any> {
    return this.http.get(this.baseUrl).map(response => response.json());
  }

}
