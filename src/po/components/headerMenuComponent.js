class HeaderMenuComponent{

  get headerMenuCategories() {
    return $$('span.top-navigation__item-text');
  };

  get headerMenuCategoryTitleText() {
    return $('a.top-navigation__sub-items-title-text.link-title');
  }

  get categoryContainer() {
    return $('div.top-navigation__flyout-inner-section')
  }

  async getHeaderMenuCategoryTitleText(){
    return await this.headerMenuCategoryTitleText.toBeDisplayed();
  }

  async getHeaderMenuCategory(param) {
    const elements = await this.headerMenuCategories;
    for (const element of elements) {
      const elementText = await element.getText();
      if (elementText === param) {
          await element.moveTo();
          return;
      }
    }
    throw new Error(`Element with text "${param}" not found.`);
    
  };

 
  
};

module.exports = HeaderMenuComponent;