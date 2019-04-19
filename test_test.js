
Feature('create new user');

Scenario('coming to homepage', (I) => {
    I.amOnPage('https://ls-guidr.netlify.com/');
    I.see('GuidR');
    I.click('Create an Account');
    I.see('CREATE ACCOUNT');
});
