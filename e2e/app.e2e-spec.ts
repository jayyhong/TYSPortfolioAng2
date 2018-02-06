import { TYSPortfolioPage } from './app.po';

describe('tysportfolio App', () => {
  let page: TYSPortfolioPage;

  beforeEach(() => {
    page = new TYSPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
