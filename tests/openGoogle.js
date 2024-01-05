const { Builder, By, Key, until } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

(async function example() {
  const firefoxOptions = new firefox.Options().setBinary(
    "/usr/local/bin/geckodriver"
  );

  const driver = await new Builder()
    .forBrowser("firefox")
    .setFirefoxOptions(firefoxOptions)
    .build();

  await driver.get("https://google.com");
})();
