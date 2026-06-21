export class LoginPage {
  usernameField = '[data-test="username"]';
  passwordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';

  enterCredentials(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.wait(3000);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }
}
