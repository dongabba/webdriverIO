import { defineSupportCode } from 'cucumber';
import LoginPage from '../pageobjects/LoginPage';

defineSupportCode(function({When}){
    When (/^User login with phonenumber and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2){
        LoginPage.login(ar1, arg2);
    });
});