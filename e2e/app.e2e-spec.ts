import { App11Page } from './app.po';

describe('app11 App', () => {
  let page: App11Page;

  beforeEach(() => {
    page = new App11Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
