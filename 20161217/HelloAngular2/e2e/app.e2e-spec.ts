import { HelloAngular2Page } from './app.po';

describe('hello-angular2 App', function() {
  let page: HelloAngular2Page;

  beforeEach(() => {
    page = new HelloAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
