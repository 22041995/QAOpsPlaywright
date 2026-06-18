import {test, expect,Locator,Page} from '@playwright/test';

export class DashboardPage 
{
    navigateToOrders : any;
     products : Locator;
     productsText : Locator ;
     cart : Locator;

    constructor(page : Page)
    {
      this.products = page.locator('.card-body');
      this.productsText = page.locator('.card-body b');
      this.cart = page.locator("[routerlink*='cart']")
    }

 async searchProductAddCart(productName : string) {
    
   
        console.log(await this.productsText.allTextContents());
        const counts = await this.products.count();
        for (let i = 0; i<counts ; ++i)
            {
            if(await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text = Add To Cart").click();
                break;
            }
        }
}

async navigateToCart() 
{
    await this.cart.click();
}
}

module.exports = {DashboardPage};