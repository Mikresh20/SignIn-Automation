import SignInPage from '../../pages/SignInPage';

describe('Sign In - Negative Tests', () => {
  beforeEach(() => {
    SignInPage.visit();
  });

  it('should show error with invalid email format', () => {
    SignInPage
      .typeEmail('invalidemail')
      .assertInvalidEmail();
    cy.wait(2000);
  });

  it('should show error with wrong password', () => {
    SignInPage
      .typeEmail('mikresh1234@gmail.com')
      .typePassword('WrongPassword123!')
      .assertErrorContains('Invalid');
  });

  
  
});