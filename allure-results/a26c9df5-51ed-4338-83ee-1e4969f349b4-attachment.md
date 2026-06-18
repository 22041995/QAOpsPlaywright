# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PageObjectImplementation.spec.js >> Client App Login ZARA COAT 3
- Location: tests\PageObjectImplementation.spec.js:8:1

# Error details

```
ReferenceError: username is not defined
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
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ZARA COAT 3
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4008 9567 9210 2001
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05" [selected]
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16"
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20" [selected]
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30"
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]: "246"
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]: Neha Mishra
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]: rahul shetty
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: nemishra2295@gmail.com
            - textbox [ref=e81]: nemishra2295@gmail.com
            - textbox "Select Country" [ref=e84]: India
            - generic [ref=e86] [cursor=pointer]: Place Order
```

# Test source

```ts
  1  | const {POManager} = require('../pageobjects/POManager');
  2  | const {test,expect} = require ('@playwright/test');
  3  | const dataset = JSON.parse(JSON.stringify(require("./utils/placeOrderTestData.json")));
  4  | 
  5  | for (const data of dataset) 
  6  | {
  7  | 
  8  | test(`Client App Login ${data.productName}`, async ({page})=>
  9  | {
  10 | 
  11 |     const poManager = new POManager(page);
  12 | 
  13 |     const cardTitle = page.locator('.card-body b');
  14 |     const products = page.locator('.card-body');
  15 |    
  16 |     
  17 |     const loginPage = poManager.getLoginPage();
  18 |     await loginPage.goTo();
  19 |     await loginPage.validLogin(data.username,data.password);
  20 | 
  21 |     const dashboardPage = poManager.getDashboardPage();
  22 |     await dashboardPage.searchProductAddCart(data.productName);
  23 |     await dashboardPage.navigateToCart();
  24 | 
  25 |     await page.locator("div li").first().waitFor();
  26 |     const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  27 |     expect(bool).toBeTruthy();
  28 |     await page.locator("text=Checkout").last().click();
  29 |     await page.locator("input[value='4542 9931 9292 2293']").fill("4008 9567 9210 2001");
  30 |     await page.locator('select.input.ddl').first().selectOption("05");
  31 |     await page.locator('select.input.ddl').last().selectOption("20");
  32 |     await page.locator('input[type="text"]').nth(1).fill('246');
  33 |     await page.locator('input[type="text"]').nth(2).fill('Neha Mishra');
  34 |     await page.locator('input[type="text"]').nth(3).fill('rahul shetty');
  35 |     //await page.locator("button[type='submit']").click();
  36 |     await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});
  37 |     const dropdown = page.locator(".ta-results");
  38 |     await dropdown.waitFor();
  39 |     const options = await dropdown.locator("button").count();
  40 |     for (let i=0;i<options;++i){
  41 |     const country = await dropdown.locator("button").nth(i).textContent();
  42 |         if (country.trim() === "India"){
  43 |             await dropdown.locator("button").nth(i).click();
  44 |             break;
  45 |         }
  46 |     }
  47 |     const emailText = await page.locator(".user__name label").first().textContent();
  48 |       console.log(emailText);
> 49 |     await expect (page.locator(".user__name label").first()).toHaveText(username);
     |                                                                         ^ ReferenceError: username is not defined
  50 |     await page.locator(".action__submit").click();
  51 |     await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  52 |     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  53 |     console.log("Order ID:", orderId); 
  54 |     await page.locator("button[routerlink*='myorders']").click();
  55 |    await page.locator("tbody").waitFor();
  56 |    const rows = await page.locator("tbody tr");
  57 |  
  58 |  
  59 |    for (let i = 0; i < await rows.count(); ++i) {
  60 |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  61 |       if (orderId.includes(rowOrderId)) {
  62 |          await rows.nth(i).locator("button").first().click();
  63 |          break;
  64 |       }
  65 |    }
  66 |    const orderIdDetails = await page.locator(".col-text").textContent();
  67 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  68 |  
  69 | })
  70 | }
```