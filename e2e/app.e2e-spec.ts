import { ProdAppPage } from './app.po';

describe('prod-app App', function() {
  let page: ProdAppPage;

  beforeEach(() => {
    page = new ProdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
