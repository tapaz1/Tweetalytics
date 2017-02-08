import {Injectable} from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TwitterService {

  public bearerToken: string;
  public searchedEntitiesArray: Array<Object> = [];
  public newTwitterEntity = new Subject<Object>();
  public receiveNewTwitterEntity = this.newTwitterEntity.asObservable();

  public announceNewTwitterEntity(twitterEntityArray) {
    console.log('Announcing new entity..');
    // console.log(twitterEntity);
    this.newTwitterEntity.next(twitterEntityArray)
  }

  constructor(private http: Http) {

  }

  private setBearerToken(token) {
    this.bearerToken = token;
  }

  public authenticate() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    return this.http.post('tweetalytics.azurewebsites.net/api/authorize', {headers: headers})
      .map((res) => {
      this.setBearerToken(res.json().data);
    });
  }

  public search(query) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    let finalQuery = 'query=' + query;

    return this.http.post('tweetalytics.azurewebsites.net/api/search', finalQuery, {headers: headers})
  }

  public getBearerToken() {
    return this.bearerToken;
  }

  public setSearchedEntity(entity) {
    if (!this.searchedEntitiesArray[entity.name.toLowerCase()]) {
      this.searchedEntitiesArray[entity.name.toLowerCase()] = entity;
      this.announceNewTwitterEntity(this.searchedEntitiesArray);
    }
  }

  public getSearchedEntity() {
    return this.searchedEntitiesArray;
  }

  public removeEntityFromArray(entityToRemove) {
    console.log(this.searchedEntitiesArray);
    delete this.searchedEntitiesArray[entityToRemove.name.toLowerCase()];
    this.newTwitterEntity.next(this.searchedEntitiesArray)
  }
}
