import { TweetalyticsPage } from './app.po';

describe('tweetalytics App', function() {
  let page: TweetalyticsPage;

  beforeEach(() => {
    page = new TweetalyticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
