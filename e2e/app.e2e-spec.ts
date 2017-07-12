import { NewsappPage } from './app.po';

describe('newsapp App', () => {
  let page: NewsappPage;

  beforeEach(() => {
    page = new NewsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
