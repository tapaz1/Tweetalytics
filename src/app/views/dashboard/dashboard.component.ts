import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TwitterService } from '../../services/twitterSearch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../home/home.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public searchedEntityArray = [];
  public searchedEntityArrayKeys = [];

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    console.log('dashboard page instantiated..');
    this.getSearchedEntityArrayKeys();

    this.subscription = this.twitter.receiveNewTwitterEntity
      .subscribe((newEntity: any) => {
      console.log(newEntity);
      this.searchedEntityArray = newEntity
        // this.searchedEntity = newEntity;
        // console.log(newEntity);
        this.getSearchedEntityArrayKeys();

      });
  }

  ngOnDestroy() {
    console.log('dashboard being destroyed..');
    this.subscription.unsubscribe();
  }

  getSearchedEntityArrayKeys() {
    this.searchedEntityArray = this.twitter.getSearchedEntity();
    console.log(this.searchedEntityArray);
    this.searchedEntityArrayKeys = Object.keys(this.searchedEntityArray);
  }

  removeEntityFromArray (entity) {
    this.twitter.removeEntityFromArray(entity);
  }
}
