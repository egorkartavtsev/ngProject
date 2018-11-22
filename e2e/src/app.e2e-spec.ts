import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to myNewProj!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to ngProject!');
>>>>>>> Create new app
  });
});
