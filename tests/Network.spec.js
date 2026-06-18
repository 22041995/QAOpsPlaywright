const {test, expect, request} = require ('@playwright/test');
const {APIUtils}  = require('./utils/APIUtils');

const loginPayload = {userEmail:"nemishra2295@gmail.com",userPassword:"22041995@April"};
const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
const fakePayloadorders = {data :[], message : "No Orders"};

let token;
let orderId;
let response;

test.beforeAll( async()=>{

const apiContext = await request.newContext();
const apiUtils = new APIUtils(apiContext,loginPayload);
response = await apiUtils.createOrder(orderPayload);

});

test('Place Order', async ({page})=>
{
    await page.addInitScript(value =>{
        window.localStorage.setItem('token',value);
    } ,response.token)
    
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
async route=>
{
   await page.request.fetch(route.request());
   let body = JSON.stringify(fakePayloadorders) ;
   route.fulfill( {
      response,
      body,
});
});
   
   await page.locator("button[routerlink*='myorders']").click();
  
   await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());
   
   //await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
   
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
 
})
   