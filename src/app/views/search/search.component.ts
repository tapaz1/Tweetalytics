import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TwitterService } from '../../services/twitterSearch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', '../home/home.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public searchedEntityArray = [];
  public searchedEntityArrayKeys = [];

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    console.log('search page instantiated..');
    this.getSearchedEntityArrayKeys();

    // this.twitter.getSearchedEntity() ? this.searchedEntity = this.twitter.getSearchedEntity() : 'undefined';

    this.subscription = this.twitter.receiveNewTwitterEntity
      .subscribe((newEntity: Array<Object>) => {
        console.log(newEntity);
        this.getSearchedEntityArrayKeys();
      });
  }

  ngOnDestroy() {
    console.log('search being destroyed..');
    this.subscription.unsubscribe();
  }

  getSearchedEntityArrayKeys() {
    this.searchedEntityArray = this.twitter.getSearchedEntity();
    this.searchedEntityArrayKeys = Object.keys(this.searchedEntityArray);
  }

  removeEntityFromArray (entity) {
    this.twitter.removeEntityFromArray(entity);
  }
}
