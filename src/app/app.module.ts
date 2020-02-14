import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';

import {MessagesComponent} from "./component/messages/messages.component";
import {HeroesComponent} from "./component/heroes/heroes.component";
import {HeroDetailComponent} from "./component/hero-detail/hero-detail.component";
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
