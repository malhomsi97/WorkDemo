import ElementsPage from '../pageObjects/ElementsPage';

describe('DemoQA Elements Page', () => {
  const elementsPage = new ElementsPage();

  beforeEach(() => {
    elementsPage.visit();
  });

  it('should load the Elements page and display the title', () => {
    elementsPage.verifyPageTitle();
  });

  // it('should show Text Box item and allow navigation', () => {
  //   elementsPage
  //     .openTextBox()
  //     .verifyTextBoxPage();
  // });

  // it('should show Check Box item and allow navigation', () => {
  //   elementsPage
  //     .openCheckBox()
  //     .verifyCheckBoxPage();
  // });
});
