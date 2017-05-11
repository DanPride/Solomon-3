import { SolomonbootstrapPage } from './app.po';

describe('solomonbootstrap App', () => {
  let page: SolomonbootstrapPage;

  beforeEach(() => {
    page = new SolomonbootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
