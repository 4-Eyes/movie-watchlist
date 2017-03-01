import { MoviesWatchlistPage } from './app.po';

describe('movies-watchlist App', () => {
  let page: MoviesWatchlistPage;

  beforeEach(() => {
    page = new MoviesWatchlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
