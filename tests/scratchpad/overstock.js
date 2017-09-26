
module.exports = {
  '@tags': ['overstock'],
  'Go to overstock': function (browser) {
    browser
      .url('https://www.overstock.com/')
      .click('#cb_lightbox > div.cb_top > div > svg');
  },
  'Click on main Logo': function (browser) {
    browser
        .click('#Overstock™_logo_RGB');
  },
  'Go to search': function (browser) {
    browser
      .setValue('#search-input', 'Christmas Tree')
      .click('#search-form > fieldset.submit > label > i');
  },

  'Browser quit': function (browser) {
    browser
    .end();
  }

};
