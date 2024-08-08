import * as hooks from "./hooks";
import LoginPage from "../pages/Login";
import HomePage from "../pages/home";
import { expect } from "chai";

describe("Sauce Labs Demo", function () {
  this.timeout(30000); // Mengatur timeout untuk test

  let driver;
  let loginPage;
  let homePage;

  before(async () => {
    await hooks.setup(); // Setup WebDriver
    driver = hooks.getDriver();
    loginPage = new LoginPage(driver);
    homePage = new HomePage(driver);
  });

  beforeEach(async () => {
    await loginPage.open(); // Buka halaman login sebelum setiap tes
  });

  afterEach(async () => {
    // Cleanup code if needed, like taking screenshots if tests fail
  });

  after(async () => {
    await hooks.teardown(); // Teardown WebDriver
  });

  it("Login with Locked User", async () => {
    await loginPage.login("locked_out_user", "secret_sauce"); // Login sebagai user Locked

    let errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.include("Epic sadface: Sorry, this user has been locked out");
  });

  it("Login with Normal User", async () => {
    await loginPage.login("standard_user", "secret_sauce"); // Login sebagai user normal

    let headerDisplayed = await homePage.headerIsDisplayed();
    expect(headerDisplayed).to.be.true; // Pastikan header ditampilkan
  });
});
