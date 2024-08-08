import { By } from "selenium-webdriver";

class loginPage {
  constructor(driver) {
    this.driver = driver;
    this.loginButton = By.id("login-button");
    this.errorMessage = By.css(".error-message-container");
    this.usernameField = By.id("user-name");
    this.passwordField = By.id("password");
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com");
  }

  async login(username, password) {
    await this.driver.findElement(this.usernameField).sendKeys(username);
    await this.driver.findElement(this.passwordField).sendKeys(password);
    await this.driver.findElement(this.loginButton).click();
  }

  async getErrorMessage() {
    let errorElement = await this.driver.findElement(this.errorMessage);
    return await errorElement.getText();
  }
}

export default loginPage;
