class ElementsPage {
  visit() {
    cy.visit('/elements');
    return this;
  }

  openURL() {
    return this.visit();
  }

  verifyPageTitle() {
    cy.contains('Elements').should('be.visible');
    return this;
  }

  openTextBox() {
    cy.contains('Text Box').scrollIntoView().click({ force: true });
    return this;
  }

  verifyTextBoxPage() {
    cy.url().should('include', '/text-box');
    cy.get('#userName').should('be.visible');
    return this;
  }

  openCheckBox() {
    cy.contains('Check Box').scrollIntoView().click({ force: true });
    return this;
  }

  verifyCheckBoxPage() {
    cy.url().should('include', '/checkbox');
    cy.get('.rct-checkbox').first().should('exist');
    return this;
  }
}

export default ElementsPage;
