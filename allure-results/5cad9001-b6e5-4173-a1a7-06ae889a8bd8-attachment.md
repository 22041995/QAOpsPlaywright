# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Network.spec.js >> Place Order
- Location: tests\Network.spec.js:20:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('.col-text')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e26]:
    - text: You have No Orders to show at this time.
    - text: Please Visit Back Us
  - generic [ref=e28]:
    - button "Go Back to Shop" [ref=e29] [cursor=pointer]
    - button "Go Back to Cart" [ref=e30] [cursor=pointer]
```

# Test source

```ts
  1  | const {test, expect, request} = require ('@playwright/test');
  2  | const {APIUtils}  = require('./utils/APIUtils');
  3  | 
  4  | const loginPayload = {userEmail:"nemishra2295@gmail.com",userPassword:"22041995@April"};
  5  | const orderPayload = {orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
  6  | const fakePayloadorders = {data :[], message : "No Orders"};
  7  | 
  8  | let token;
  9  | let orderId;
  10 | let response;
  11 | 
  12 | test.beforeAll( async()=>{
  13 | 
  14 | const apiContext = await request.newContext();
  15 | const apiUtils = new APIUtils(apiContext,loginPayload);
  16 | response = await apiUtils.createOrder(orderPayload);
  17 | 
  18 | });
  19 | 
  20 | test('Place Order', async ({page})=>
  21 | {
  22 |     await page.addInitScript(value =>{
  23 |         window.localStorage.setItem('token',value);
  24 |     } ,response.token)
  25 |     
  26 |     await page.goto("https://rahulshettyacademy.com/client/");
  27 |     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  28 | async route=>
  29 | {
  30 |    await page.request.fetch(route.request());
  31 |    let body = JSON.stringify(fakePayloadorders) ;
  32 |    route.fulfill( {
  33 |       response,
  34 |       body,
  35 | });
  36 | });
  37 |    
  38 |    await page.locator("button[routerlink*='myorders']").click();
  39 |   
  40 |    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  41 |     console.log(await page.locator(".mt-4").textContent());
  42 |    
  43 |    //await page.locator("tbody").waitFor();
  44 |    const rows = await page.locator("tbody tr");
  45 |    
  46 |    for (let i = 0; i < await rows.count(); ++i) {
  47 |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  48 |       if (response.orderId.includes(rowOrderId)) {
  49 |          await rows.nth(i).locator("button").first().click();
  50 |          break;
  51 |       }
  52 |    }
> 53 |    const orderIdDetails = await page.locator(".col-text").textContent();
     |                                                           ^ Error: locator.textContent: Test timeout of 50000ms exceeded.
  54 |    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
  55 |  
  56 | })
  57 |    
```