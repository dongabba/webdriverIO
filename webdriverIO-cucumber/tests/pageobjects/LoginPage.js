import Page from './page'

class LoginPage extends Page{
    get phonenumberInput() { return browser.element('//div[@class=\'_2Ym3EU\']//input');}
    get nextButton() { return browser.element('//div[@class=\'_2Ym3EU\']//button');}
    get loginWithPasswordLink() { return browser.element('//div[@class=\'_3MK7G2\']//div[@class=\'_1EVAAR\']//span');}
    get passwordInput() {return browser.element('//div[@class=\'_26URVT _1O1XIF\']//input[@type=\'password\']');}
    get loginButton() {return browser.element('//div[@class=\'_26URVT _1O1XIF\']//button[@type=\'submit\']');}

    open(){
        super.open('https://moskva.beeline.ru/login/');
    }

    waitForLoginPageLoaded(){
        if(!this.phonenumberInput.isVisible){
            this.phonenumberInput.waitForVisible('5000')
        }
    }

    waitForLoginPageLoadedStep2(){
        if(!this.loginWithPasswordLink.isVisible){
            this.loginWithPasswordLink.waitForVisible('5000')
        }
    }

    waitForLoginPageLoadedStep3(){
        if(!this.passwordInput.isVisible){
            this.passwordInput.waitForVisible('5000')
        }
    }

    login(phonenumber, password){
        this.waitForLoginPageLoaded;
        this.phonenumberInput.setValue(phonenumber);
        this.nextButton.click;
        this.waitForLoginPageLoadedStep2;
        this.loginWithPasswordLink.click;
        this.waitForLoginPageLoadedStep3;
        this.passwordInput.setValue(password);
        this.loginButton.click;
    }
}
export default new LoginPage();