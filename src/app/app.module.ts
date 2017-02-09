import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BrowserXhr } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component'
import { TwitterService } from './services/twitterSearch.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SearchComponent } from './views/search/search.component';
import { TwitterEntityCardComponent } from './components/twitter-entity-card/twitter-entity-card.component';
import { TwitterEntityContainerComponent } from './components/twitter-entity-container/twitter-entity-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    SearchComponent,
    TwitterEntityCardComponent,
    TwitterEntityContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    TwitterService,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
