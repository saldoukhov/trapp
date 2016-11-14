import { TrappPage } from './app.po';

describe('trapp App', function() {
  let page: TrappPage;

  beforeEach(() => {
    page = new TrappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
