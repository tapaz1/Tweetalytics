import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import  { TwitterService } from '../../services/twitterSearch.service';

@Component({
  selector: 'app-home',
  providers: [TwitterService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchResults: string;
  public searchedEntity;



  constructor(private router: Router, private twitter: TwitterService) { }

  ngOnInit() {
    if(typeof this.twitter.getBearerToken() === 'undefined') {
      this.twitter.authenticate()
        .subscribe(() => {
        // console.log(this.twitter.getBearerToken());
        })
      }
    }

  goToRoute(route) {
    this.router.navigate([`/${route}`])
  }

  searchTwitter() {
    // Get cached object from the TwitterSearch Service
    let searchedEntity = this.twitter.getSearchedEntity();
    console.log(searchedEntity);

    // If the cached object does not exists then retrieve it from the search API
    if(typeof searchedEntity[this.searchResults] === 'undefined') {
      console.log("Twitter entity doesn't exists. Search for it..");
      this.twitter.search(this.convertString(this.searchResults))
        .subscribe(res => {
          this.searchedEntity = {};
          this.mapEntity(res.json());
        })
    } else {
      console.log('Twitter entity exists. Use cache..');
      this.searchedEntity = searchedEntity[this.searchResults];
      this.twitter.announceNewTwitterEntity(this.searchedEntity);
    }
  }

  public convertString = string => string.replace(/[.?*+^$!~`@#%&;:,<>/'=_"[\]\\(){}|-]/g, "");

  public cacheSearchedEntity = () => {
    this.twitter.setSearchedEntity(this.searchedEntity);
  };

  public mapEntity = data => {
    this.searchedEntity.name = data.entityInfo.name;
    this.searchedEntity.id = data.entityInfo.id;
    this.searchedEntity.description = data.entityInfo.description;
    this.searchedEntity.favoritesCount = data.entityInfo.favourites_count;
    this.searchedEntity.followersCount = data.entityInfo.followers_count;
    this.searchedEntity.friendsCount = data.entityInfo.friends_count;
    this.searchedEntity.profileImage = data.entityInfo.profile_image_url_https.replace('normal', '200x200');
    this.searchedEntity.backgroundImage = data.entityInfo.profile_banner_url;
    this.searchedEntity.tweets = data.entityTweets;

    // Store the mapped Twitter object in cache object
    this.cacheSearchedEntity();
  };
}
