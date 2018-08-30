import Page from './page'

class AccountPage extends Page{

    get phoneNumber() {return browser.element('//div[@class=\'App_ctn_37-f\']');}
    
    waitForAccountPageToLoad(){
        if(!this.phoneNumber.isVisible){
            this.phoneNumber.waitForVisible('10000');
        }
    }
    
    open(){
        super.open('https://moskva.beeline.ru/customers/products/mobile/profile/#/home')
        this.waitForAccountPageToLoad;
        }

    getPhoneNumber(){
        return this.phoneNumber.getText();
    }
}

export default new AccountPage()