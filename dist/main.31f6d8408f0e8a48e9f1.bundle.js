webpackJsonp([0,3],{181:function(t,e){t.exports="#homeContainer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  height:100vh;\n  overflow:hidden;\n  background:#ffffff;\n}\n\n#mainContentContainer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  height:100%;\n}\n\n#sideNavContainer{\n  background:#d8d8d8;\n  padding:16px;\n  width:10%;\n  max-width:35px;\n  box-shadow:3px 3px 6px rgba(0,0,0,0.24);\n}\n\n#header{\n  color:#ffffff;\n}\n\n#headerContainer{\n  z-index:1;\n  background:#00aced;\n  min-height:60px;\n  box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n\n#bodyContentContainer{\n  width:100%;\n  background:rgba(0,0,0,0.05);\n  overflow:scroll;\n  padding:.5em;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -ms-flex-wrap:wrap;\n      flex-wrap:wrap;\n}\n\n#searchBarContainer > md-input-container{\n  font-size:.75rem;\n  width:100%;\n  color:#00aced;\n}\n\n#searchBarContainer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  height:55px;\n  width:100%;\n}\n\n#sideNav{\n  width:100%;\n  height:100%;\n}\n\n.entityContainer{\n  background-repeat:no-repeat;\n  background-size:contain;\n  height:30%;\n  min-height:325px;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  max-width:265px;\n  min-width:265px;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n}\n\n#entityBodyContainer{\n  width:100%;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n}\n\n#entityHeaderContainer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:column;\n          flex-direction:column;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:end;\n      -ms-flex-pack:end;\n          justify-content:flex-end;\n  min-height:125px;\n  width:100%;\n  margin:0;\n}\n\n.entityProfilePic{\n  width:100px;\n  height:100px;\n}\n\n.entityProfilePic > img{\n  width:100%;\n  border-radius:10%;\n}\n\n.twitterAvatar{\n  width:150px;\n  margin:12px 0;\n  background-image:url('../../../assets/img/twitter-logo.png');\n  background-size:contain;\n  background-position:center;\n  background-repeat:no-repeat;\n}\n\n.animateLogoInfinite{\n  stroke-dasharray:1260 1262;\n  stroke-dashoffset:1261;\n  fill:transparent;\n  -webkit-animation:drawLogo 6000ms linear 0ms forwards infinite;\n          animation:drawLogo 6000ms linear 0ms forwards infinite;\n}\n"},425:function(t,e,n){"use strict";var i=n(0),r=n(88);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.twitter=t,this.searchedEntityArray=[],this.searchedEntityArrayKeys=[]}return t.prototype.ngOnInit=function(){var t=this;console.log("dashboard page instantiated.."),this.getSearchedEntityArrayKeys(),this.subscription=this.twitter.receiveNewTwitterEntity.subscribe(function(e){console.log(e),t.searchedEntityArray=e,t.getSearchedEntityArrayKeys()})},t.prototype.ngOnDestroy=function(){console.log("dashboard being destroyed.."),this.subscription.unsubscribe()},t.prototype.getSearchedEntityArrayKeys=function(){this.searchedEntityArray=this.twitter.getSearchedEntity(),console.log(this.searchedEntityArray),this.searchedEntityArrayKeys=Object.keys(this.searchedEntityArray)},t.prototype.removeEntityFromArray=function(t){this.twitter.removeEntityFromArray(t)},t=o([n.i(i.G)({selector:"app-dashboard",template:n(809),styles:[n(802),n(181)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},426:function(t,e,n){"use strict";var i=n(0),r=n(253),o=n(94),a=(n.n(o),n(276)),c=(n.n(a),n(88));n.d(e,"a",function(){return f});var s=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e){var n=this;this.router=t,this.twitter=e,this.convertString=function(t){return t.replace(/[.?*+^$!~`@#%&;:,<>\/'=_"[\]\\(){}|-]/g,"")},this.cacheSearchedEntity=function(){n.twitter.setSearchedEntity(n.searchedEntity)},this.mapEntity=function(t){n.searchedEntity.name=t.entityInfo.name,n.searchedEntity.id=t.entityInfo.id,n.searchedEntity.description=t.entityInfo.description,n.searchedEntity.favoritesCount=t.entityInfo.favourites_count,n.searchedEntity.followersCount=t.entityInfo.followers_count,n.searchedEntity.friendsCount=t.entityInfo.friends_count,n.searchedEntity.profileImage=t.entityInfo.profile_image_url_https.replace("normal","200x200"),n.searchedEntity.backgroundImage=t.entityInfo.profile_banner_url,n.searchedEntity.tweets=t.entityTweets,n.cacheSearchedEntity()}}return t.prototype.ngOnInit=function(){"undefined"==typeof this.twitter.getBearerToken()&&this.twitter.authenticate().subscribe(function(){})},t.prototype.goToRoute=function(t){this.router.navigate(["/"+t])},t.prototype.searchTwitter=function(){var t=this,e=this.twitter.getSearchedEntity();console.log(e),"undefined"==typeof e[this.searchResults]?(console.log("Twitter entity doesn't exists. Search for it.."),this.twitter.search(this.convertString(this.searchResults)).subscribe(function(e){t.searchedEntity={},t.mapEntity(e.json())})):(console.log("Twitter entity exists. Use cache.."),this.searchedEntity=e[this.searchResults],this.twitter.announceNewTwitterEntity(this.searchedEntity))},t=s([n.i(i.G)({selector:"app-home",providers:[c.a],template:n(810),styles:[n(181)]}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(o="undefined"!=typeof c.a&&c.a)&&o||Object])],t);var e,o}()},427:function(t,e,n){"use strict";var i=n(0),r=n(253),o=n(88);n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.router=t,this.twitter=e}return t.prototype.ngOnInit=function(){},t.prototype.loginUser=function(){"undefined"!=typeof this.user&&"undefined"!=typeof this.password&&"adam"===this.user.toLowerCase()&&"pass"===this.password.toLowerCase()&&(console.log("Login user.."),this.router.navigate(["/home"]),this.twitter.authenticate())},t=a([n.i(i.G)({selector:"app-login",template:n(811),styles:[n(803),n(467)]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(s="undefined"!=typeof o.a&&o.a)&&s||Object])],t);var e,s}()},428:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(i.G)({selector:"app-not-found",template:n(812),styles:[n(804)]}),o("design:paramtypes",[])],t)}()},429:function(t,e,n){"use strict";var i=n(0),r=n(88);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.twitter=t,this.searchedEntityArray=[],this.searchedEntityArrayKeys=[]}return t.prototype.ngOnInit=function(){var t=this;console.log("search page instantiated.."),this.getSearchedEntityArrayKeys(),this.subscription=this.twitter.receiveNewTwitterEntity.subscribe(function(e){console.log(e),t.getSearchedEntityArrayKeys()})},t.prototype.ngOnDestroy=function(){console.log("search being destroyed.."),this.subscription.unsubscribe()},t.prototype.getSearchedEntityArrayKeys=function(){this.searchedEntityArray=this.twitter.getSearchedEntity(),this.searchedEntityArrayKeys=Object.keys(this.searchedEntityArray)},t.prototype.removeEntityFromArray=function(t){this.twitter.removeEntityFromArray(t)},t=o([n.i(i.G)({selector:"app-search",template:n(813),styles:[n(805),n(181)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},467:function(t,e){t.exports="\n"},482:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=482},483:function(t,e,n){"use strict";var i=n(647),r=(n.n(i),n(612)),o=n(0),a=n(646),c=n(642);a.a.production&&n.i(o._40)(),n.i(r.a)().bootstrapModule(c.a)},641:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(i.G)({selector:"app-root",template:n(806),styles:[n(467)]}),o("design:paramtypes",[])],t)}()},642:function(t,e,n){"use strict";var i=n(61),r=n(0),o=n(44),a=n(157),c=n(593),s=n(253),d=n(643),f=n(641),l=n(427),p=n(428),u=n(426),y=n(88),h=n(425),m=n(429),b=n(644),g=n(645);n.d(e,"a",function(){return v});var w=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){function t(){}return t=w([n.i(r.I)({declarations:[f.a,l.a,p.a,u.a,h.a,m.a,b.a,g.a],imports:[i.e,o.b,a.b,c.MaterialModule.forRoot(),s.b.forRoot(d.a)],providers:[y.a],bootstrap:[f.a]}),x("design:paramtypes",[])],t)}()},643:function(t,e,n){"use strict";var i=n(427),r=n(428),o=n(426),a=n(425),c=n(429);n.d(e,"a",function(){return s});var s=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:i.a},{path:"home",component:o.a,children:[{path:"",redirectTo:"search",pathMatch:"full"},{path:"search",component:c.a},{path:"dashboard",component:a.a}]},{path:"**",component:r.a}]},644:function(t,e,n){"use strict";var i=n(0),r=n(88);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.twitter=t}return t.prototype.ngOnInit=function(){console.log("Twitter Entity Card Rendered..")},t.prototype.ngOnDestroy=function(){console.log("Twitter Entity is being removed..")},o([n.i(i.B)(),a("design:type",Object)],t.prototype,"entity",void 0),o([n.i(i.B)(),a("design:type",Object)],t.prototype,"removeTwitterEntity",void 0),t=o([n.i(i.G)({selector:"twitter-entity-card",template:n(807),styles:[n(800),n(181)]}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()},645:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(i.G)({selector:"app-twitter-entity-container",template:n(808),styles:[n(801)]}),o("design:paramtypes",[])],t)}()},646:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i={production:!0}},647:function(t,e,n){"use strict";var i=n(661),r=(n.n(i),n(654)),o=(n.n(r),n(650)),a=(n.n(o),n(656)),c=(n.n(a),n(655)),s=(n.n(c),n(653)),d=(n.n(s),n(652)),f=(n.n(d),n(660)),l=(n.n(f),n(649)),p=(n.n(l),n(648)),u=(n.n(p),n(658)),y=(n.n(u),n(651)),h=(n.n(y),n(659)),m=(n.n(h),n(657)),b=(n.n(m),n(662)),g=(n.n(b),n(842));n.n(g)},800:function(t,e){t.exports="\n.removeCardButton{\n  position:absolute;\n  top:4px;\n  right:4px;\n  min-width:40px;\n  padding:0;\n  color:#ffffff;\n  background:#00aced;\n}\n\n.closeIcon{\n  font-size:14px;\n  height:18px;\n  width:18px;\n  line-height:18px;\n  font-weight:bolder;\n}\n\n.followerProfilePic{\n  border-radius:10%;\n}\n\n.followerHeaderContainer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-direction:row;\n          flex-direction:row;\n  -webkit-box-align:start;\n      -ms-flex-align:start;\n          align-items:flex-start;\n}\n\n.followerBodyMedia{\n  width:auto;\n  height:auto;\n  max-height:50%;\n  max-width:50%;\n}\n\n.entityTitle{\n  text-align:center;\n}\n\n.entityDescription{\n  color:#66757f;\n}\n"},801:function(t,e){t.exports=""},802:function(t,e){t.exports=""},803:function(t,e){t.exports="#loginContainer{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  width:100%;\n  height:100vh;\n}\n\n#loginCardContainer{\n  background:#ffffff;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  width:75%;\n  height:75vh;\n  max-width:400px;\n  max-height:500px;\n}\n\n.loginInputs{\n  display:block;\n  padding:1px 0;\n  margin:0 15px;\n  color:#ababab;\n}\n\n.loginButton{\n  background:#00aced;\n  color:#ffffff;\n  margin:0 auto;\n  display:block;\n  width:90%;\n  text-transform:uppercase;\n}\n\n.twitterLogo{\n  -webkit-transform:scale(.35);\n  transform:scale(.35);\n}\n"},804:function(t,e){t.exports=""},805:function(t,e){t.exports=""},806:function(t,e){t.exports="<router-outlet></router-outlet>\n"},807:function(t,e){t.exports='<div id="entityBodyContainer">\n  <md-card class="entityContainer" [ngStyle]="{\'background-image\': \'url(\' + entity.backgroundImage + \')\'}">\n    <button class="removeCardButton" md-button (click)="removeTwitterEntity(entity)"><md-icon class="closeIcon">close</md-icon></button>\n    <div id="entityHeaderContainer">\n      <div class="entityProfilePic">\n        <img src="{{entity.profileImage}}"/>\n      </div>\n    </div>\n    <md-card-content>\n      <h3 class="entityTitle">{{entity.name}}</h3>\n      <span class="entityDescription">{{entity.description}}</span>\n    </md-card-content>\n    <md-card-actions>\n      <button class="primaryButton" md-raised-button>LIKE</button>\n      <button class="primaryButton" md-raised-button>SHARE</button>\n    </md-card-actions>\n  </md-card>\n  <div style="display: flex; flex-direction: column; max-height: 375px; height: 30%; overflow: scroll;">\n    <md-card *ngFor="let tweet of entity.tweets">\n      <md-card-content>\n        <div class="followerHeaderContainer">\n          <div>\n            <img class="followerProfilePic" src="{{tweet.user.profile_image_url_https}}" />\n            <h4>{{tweet.user.name}}</h4>\n            <span>{{tweet.created_at | date:\'shortTime\'}}</span>\n          </div>\n          <div>\n            <p>{{tweet.text}}</p>\n            <div *ngFor="let media of tweet.entities.media">\n              <img class="followerBodyMedia" src="{{media.media_url_https}}"/>\n            </div>\n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>\n'},808:function(t,e){t.exports='<div class="bodyChildViewContainer" *ngIf="searchedEntityArrayKeys.length > 0">\n  <div *ngFor="let entity of searchedEntityArrayKeys">\n    <twitter-entity-card [entity]="searchedEntityArray[entity]" [removeTwitterEntity]="removeEntityFromArray"></twitter-entity-card>\n  </div>\n</div>\n'},809:function(t,e){t.exports='<div class="bodyChildViewContainer" *ngIf="searchedEntityArrayKeys.length > 0">\n  <div *ngFor="let entity of searchedEntityArrayKeys">\n    <twitter-entity-card [entity]="searchedEntityArray[entity]" [removeTwitterEntity]="removeEntityFromArray"></twitter-entity-card>\n  </div>\n</div>\n'},810:function(t,e){t.exports='<section id="homeContainer">\n  <section id="headerContainer">\n    <md-toolbar id="header">\n      <svg class="dashboardMainLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.00006 244.18703" height="244.19" width="300" version="1.1">\n        <g style="" transform="translate(-539.18 -568.86)">\n          <path\n            d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464"\n            stroke="#ffffff" fill="none" class="animateLogo">\n          </path>\n        </g>\n      </svg>\n    </md-toolbar>\n  </section>\n  <section id="mainContentContainer">\n    <aside id="sideNavContainer">\n      <md-sidenav-container id="sideNav" align="start">\n        <md-sidenav #navBar mode="side" opened="true">\n          <button [routerLink]="[\'search\']" class="sideNavButton" md-button>\n            <md-icon>search</md-icon>\n          </button>\n          <button [routerLink]="[\'dashboard\']" class="sideNavButton" md-button>\n            <md-icon>dashboard</md-icon>\n          </button>\n          <button class="sideNavButton" md-button>\n            <md-icon>trending_up</md-icon>\n          </button>\n          <button  class="sideNavButton" md-button>\n            <md-icon>view_carousel</md-icon>\n          </button>\n        </md-sidenav>\n      </md-sidenav-container>\n    </aside>\n    <aside id="bodyContentContainer">\n      <md-card id="searchBarContainer">\n        <md-input-container>\n          <input md-input placeholder="Search" (keyup.enter)="searchTwitter($event)" [(ngModel)]="searchResults">\n          <md-hint><em>Search for a company name and press enter when complete (e.g. Wal-Mart, BestBuy)</em></md-hint>\n        </md-input-container>\n      </md-card>\n      <router-outlet></router-outlet>\n    </aside>\n  </section>\n</section>\n'},811:function(t,e){t.exports='<section id="loginContainer">\n  <md-card id="loginCardContainer">\n    <div>\n      <svg class="twitterLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.00006 244.18703" height="244.19" width="300" version="1.1">\n        <g style="" transform="translate(-539.18 -568.86)">\n          <path\n            d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464"\n            stroke="#000000" fill="none" class="animateLoginLogo">\n          </path>\n        </g>\n      </svg>\n      <md-input-container class="loginInputs">\n        <input  md-input floatingPlaceholder="false" title="User" placeholder="Username" [(ngModel)]="user" type="email">\n      </md-input-container>\n      <md-input-container dividerColor="red" class="loginInputs">\n        <input md-input title="Password" placeholder="Password" [(ngModel)]="password" type="password">\n      </md-input-container>\n      <button class="loginButton" md-raised-button (click)="loginUser()">Login</button>\n    </div>\n  </md-card>\n</section>\n'},812:function(t,e){t.exports="<p>\n  404: Page Not Found\n</p>\n"},813:function(t,e){t.exports='<div class="bodyChildViewContainer" *ngIf="searchedEntityArrayKeys.length > 0">\n  <div *ngFor="let entity of searchedEntityArrayKeys">\n    <twitter-entity-card [entity]="searchedEntityArray[entity]" [removeTwitterEntity]="removeEntityFromArray"></twitter-entity-card>\n  </div>\n</div>\n'},843:function(t,e,n){t.exports=n(483)},88:function(t,e,n){"use strict";var i=n(0),r=n(157),o=n(18),a=(n.n(o),n(94)),c=(n.n(a),n(276));n.n(c);n.d(e,"a",function(){return f});var s=this&&this.__decorate||function(t,e,n,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(o<3?r(a):o>3?r(e,n,a):r(e,n))||a);return o>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t){this.http=t,this.searchedEntitiesArray=[],this.newTwitterEntity=new o.Subject,this.receiveNewTwitterEntity=this.newTwitterEntity.asObservable()}return t.prototype.announceNewTwitterEntity=function(t){console.log("Announcing new entity.."),this.newTwitterEntity.next(t)},t.prototype.setBearerToken=function(t){this.bearerToken=t},t.prototype.authenticate=function(){var t=this,e=new r.c;return e.append("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),this.http.post("http://localhost:3000/authorize",{headers:e}).map(function(e){t.setBearerToken(e.json().data)})},t.prototype.search=function(t){var e=new r.c;e.append("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");var n="query="+t;return this.http.post("http://localhost:3000/search",n,{headers:e})},t.prototype.getBearerToken=function(){return this.bearerToken},t.prototype.setSearchedEntity=function(t){this.searchedEntitiesArray[t.name.toLowerCase()]||(this.searchedEntitiesArray[t.name.toLowerCase()]=t,this.announceNewTwitterEntity(this.searchedEntitiesArray))},t.prototype.getSearchedEntity=function(){return this.searchedEntitiesArray},t.prototype.removeEntityFromArray=function(t){console.log(this.searchedEntitiesArray),delete this.searchedEntitiesArray[t.name.toLowerCase()],this.newTwitterEntity.next(this.searchedEntitiesArray)},t=s([n.i(i.R)(),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object])],t);var e}()}},[843]);
//# sourceMappingURL=main.31f6d8408f0e8a48e9f1.bundle.map