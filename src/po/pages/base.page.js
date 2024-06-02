const HeaderMenuComponent = require('../components/headerMenuComponent');
const SidebarMenuComponent = require('../components/sidebarMenuComponent');

class BasePage{

  constructor(){
    
    this.headerMenu = new HeaderMenuComponent();
    //this.sidebarMenu = new SidebarMenuComponent();
  };

  async openBasePage() {
    
    await browser.url('https://www.epam.com/');
    
  };
  
  async fullScreen() {

    await browser.maximizeWindow();
  };

  get acceptCookiesBtn() {
    return $('#onetrust-banner-sdk #onetrust-accept-btn-handler');
  };

  get cookiesBanner() {
    return $('#onetrust-banner-sdk');
  };

  async closeCookiesBar() {

    await browser.waitUntil(
      async () => await this.cookiesBanner.isDisplayed(),
      {
        timeout: 2000,
        timeoutMsg: 'Cookies banner is not visible within the timeout period'
      }
    );
    await this.acceptCookiesBtn.click();
    await browser.setCookies({name: 'test', value: 'one'});
    
  };

};

module.exports = BasePage;