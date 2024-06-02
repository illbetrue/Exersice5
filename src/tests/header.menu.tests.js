
const BasePage = require('../po/pages/base.page');
const basePage = new BasePage();



describe('Tests suit', async () => {
    
  
  beforeEach(async () => {
  await basePage.fullScreen();
  await basePage.openBasePage();
  await basePage.closeCookiesBar();
  });

  /*it('Get title', async () => {
      await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services');
  });*/

  it('Hover the specified category in the header Menu', async () => {
    
    await basePage.headerMenu.getHeaderMenuCategory('Insights');
    await basePage.headerMenu.categoryContainer.toBeDisplayed();
    
  });

});