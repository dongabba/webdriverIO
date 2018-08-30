import { defineSupportCode } from 'cucumber';
import AccountPage from '../pageobjects/AccountPage';
const chai = require('chai');
const should = chai.should;

defineSupportCode(function({Then}){
    Then (/^User should see own Phone Number "([^"]*)" on account page$/, function(phonenumber){
        AccountPage.getPhoneNumber().should.equal(phonenumber);
    });
});