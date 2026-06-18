import {POManager} from'../pageobjects_ts/POManager';
import {test,expect} from '@playwright/test';
import {customTest} from './utils_ts/test-base'

const dataset = JSON.parse(JSON.stringify(require("./utils_ts/placeOrderTestData.json")));


customTest('Client App login', async ({page})=>
 {
   const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const username = "anshika@gmail.com";
     const password = "Iamking@000"
     const productName = 'Zara Coat 4';
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
     const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(productName);
     await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    let orderId : any ;
    orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();


 });
 

 



 

