const url = 'http://localhost:3000';
const delay = 3000;

function test(name, callback) {
  module.exports[name] = callback;
}


test('Check, when have corect value ', (client) => {
  client
    .url(url)
    .waitForElementVisible('body', delay)
    .setValue('#name', 'Damian')
    .setValue('#surName', 'Kowalski')
    .pause(1000)
    .setValue('#mail', 'Damian7@gmail.com')
    .click('#dateTime')
    .pause(delay)
    .click("#root > div.container > form > div > div.col-lg-4 > div > div.react-datepicker-popper > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(4) > div.react-datepicker__day.react-datepicker__day--keyboard-selected.react-datepicker__day--today")
    .pause(delay)
    .click('#buttonSend')
    .pause(delay)
    .waitForElementPresent('.MsgShow--sucess')
    .pause(delay)
    .end();
  }
);

test('Check, whenall values are wrong ', (client) => {
  client
    .url(url)
    .waitForElementVisible('body', delay)
    .click('#buttonSend')
    .pause(delay)
    .waitForElementPresent('.App--error')
    .pause(delay)
    .end();
  }
);

test('Check, one by one has got incorect value ', (client) => {
  client
    .url(url)
    .waitForElementVisible('body', delay)
    .setValue('#name', '')
    .setValue('#surName', '')
    .setValue('#mail', 'Dagmail.com')
    .waitForElementPresent('#nameerror')
    .waitForElementPresent('#surNameerror')
    .click('#dateTime')
    .waitForElementPresent('#mailerror')
    .pause(delay)
    .click('#buttonSend')
    .pause(delay)
    .waitForElementPresent('#dateTimeerror')
    .pause(delay)
    .end();
  }
);