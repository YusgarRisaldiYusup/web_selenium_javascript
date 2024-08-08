import { Builder } from "selenium-webdriver";
import * as edge from "selenium-webdriver/edge";

let driver;

const getDriver = () => driver;

const setup = async () => {
  let options = new edge.Options();
  driver = await new Builder().forBrowser("MicrosoftEdge").setEdgeOptions(options).build();
};

const teardown = async () => {
  if (driver) {
    await driver.quit();
  }
};

export { setup, teardown, getDriver };
