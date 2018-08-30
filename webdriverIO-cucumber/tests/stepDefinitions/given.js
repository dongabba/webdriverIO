
import { defineSupportCode } from 'cucumber';
import LoginPage from '../pageobjects/LoginPage';

defineSupportCode(function({Given}){
    Given(/^User on the beeline main page$/, function(){
        LoginPage.open();
    });
});