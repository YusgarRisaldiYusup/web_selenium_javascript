import { By } from "selenium-webdriver";

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.Header = By.css("div[class='app_logo']");
  }

  async open() {
    await this.driver.get("https://www.saucedemo.com");
  }

  async headerIsDisplayed() {
    try {
      let headerElement = await this.driver.findElement(this.Header);
      return await headerElement.isDisplayed();
    } catch (error) {
      return false; // Agar Jika elemen tidak ditemukan, anggap tidak ditampilkan
    }
  }
}

export default HomePage;
