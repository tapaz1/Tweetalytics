import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TwitterService } from '../../services/twitterSearch.service';

@Component({
  selector: 'twitter-entity-card',
  templateUrl: './twitter-entity-card.component.html',
  styleUrls: ['./twitter-entity-card.component.css', '../../views/home/home.component.css']
})
export class TwitterEntityCardComponent implements OnInit, OnDestroy {

  @Input() entity: any;
  @Input() removeTwitterEntity: any;

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    console.log('Twitter Entity Card Rendered..');
  }

  ngOnDestroy() {
    console.log('Twitter Entity is being removed..');
  }
}
