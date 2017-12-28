module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('https://stackoverflow.com')
      .waitForElementVisible('input[name="q"]', 1000)
      .setValue('input[name="q"]', 'elm architecture')
      .waitForElementVisible('button[type="submit"]', 1000)
      .click('button[type="submit"]')
      .pause(1000)
      .assert.containsText('#mainbar', 'Q: Elm Architecture and tasks')
      .end();
  }
};
