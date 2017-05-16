import { CobaPage } from './app.po';

describe('coba App', () => {
  let page: CobaPage;

  beforeEach(() => {
    page = new CobaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
