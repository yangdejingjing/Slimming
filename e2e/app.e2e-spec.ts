import { SlimmingPage } from './app.po';

describe('slimming App', function() {
  let page: SlimmingPage;

  beforeEach(() => {
    page = new SlimmingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
