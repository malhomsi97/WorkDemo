import ElementsPage from '../pageObjects/ElementsPage';

describe('DemoQA Elements Page with POM', () => {
  const elementsPage = new ElementsPage();

  beforeEach(() => {
    cy.viewport(2040, 1080);
    elementsPage.openURL();
  });

  it('should load the Elements page and display the title', () => {
    elementsPage.verifyPageTitle();
  });

  it('should show Text Box item and allow navigation', () => {
    elementsPage
      .openTextBox()
      .verifyTextBoxPage();
  });

  it('should show Check Box item and allow navigation', () => {
    elementsPage
      .openCheckBox()
      .verifyCheckBoxPage();
  });
});
