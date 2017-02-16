import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReducerComponent } from './components/reducer/reducer.component';
import { RankingComponent } from './components/ranking/ranking.component';

import { UrlItemDataService } from './components/shared/url-item-data.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, HeaderComponent, ReducerComponent, RankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UrlItemDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router:Router) { }
 }
