import SignInPage from '../../pages/SignInPage';

describe('Sign In - Positive Tests', () => {
  beforeEach(() => {
    SignInPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    SignInPage
      .typeEmail('mikresh1234@gmail.com')
      .typePassword('112233332211aA@')
      .assertLoginSuccess();
 
  });
});