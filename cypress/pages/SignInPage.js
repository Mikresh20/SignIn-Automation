class SignInPage {
  visit() {
    cy.visit("https://www.wiseadmit.io/applynow");
    cy.url().should('include', '/applynow');
    cy.wait(1000);
  }

  typeEmail(email) {
    cy.get('input[name="email"]', { timeout: 10000 })
      .should('be.visible')
      .should('be.enabled')
      .clear()
      .type(email)
      .should('have.value', email);
    
    cy.contains('button', 'Log in')
      .should('be.visible')
      .should('be.enabled')
      .click();
    cy.wait(1000);
    return this;
  }

  typePassword(password) {
    cy.get('input[name="password"]', { timeout: 10000 })
      .should('be.visible')
      .should('be.enabled')
      .clear()
      .type(password, { log: false })
      .should('have.value', password);
    
    cy.contains('button', 'Log in')
      .should('be.visible')
      .should('be.enabled')
      .click();
    
    return this;
  }

 
  assertLoginSuccess() {
    cy.url({ timeout: 15000 })
      .should('not.include', '/applynow');
    
    
   
    cy.contains('Invalid').should('not.exist');
    cy.contains('Error').should('not.exist');
    
    return this;
  }

  
  assertErrorContains(text) {
    cy.contains(text, { timeout: 8000 })
      .should("be.visible");
    return this;
  }

  
  assertInvalidEmail() {
    cy.contains('Invalid Email', { timeout: 5000 })
      .should('be.visible');
    return this;
  }

 
  assertStillOnLoginPage() {
    cy.url().should('include', '/applynow');
    return this;
  }
}

module.exports = new SignInPage();