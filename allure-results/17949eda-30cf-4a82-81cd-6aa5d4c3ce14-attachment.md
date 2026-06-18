# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice1.spec.js >> Rahul Shetty Practice Website
- Location: tests\Practice1.spec.js:2:1

# Error details

```
Error: locator.isVisible: Error: strict mode violation: locator('h3:has-text(\'ZARA COAT 3\')') resolved to 2 elements:
    1) <h3 _ngcontent-kbj-c41="">ZARA COAT 3</h3> aka getByRole('heading', { name: 'ZARA COAT' }).first()
    2) <h3 _ngcontent-kbj-c41="">ZARA COAT 3</h3> aka getByRole('heading', { name: 'ZARA COAT' }).nth(1)

Call log:
    - checking visibility of locator('h3:has-text(\'ZARA COAT 3\')')

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
        - button " Cart 2" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "2"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - generic [ref=e30]:
      - list [ref=e31]:
        - listitem [ref=e32] [cursor=pointer]:
          - generic [ref=e33]:
            - generic [ref=e34]:
              - paragraph [ref=e35]: "#6960eac0c941646b7a8b3e68"
              - heading "ZARA COAT 3" [level=3] [ref=e36]
              - paragraph [ref=e37]: MRP $ 11500
              - paragraph [ref=e38]: In Stock
            - paragraph [ref=e40]: $ 11500
            - generic [ref=e41]:
              - button "Buy Now❯" [ref=e42]
              - button "❯" [ref=e43]:
                - generic [ref=e44]: 
                - text: ❯
      - list [ref=e45]:
        - listitem [ref=e46] [cursor=pointer]:
          - generic [ref=e47]:
            - generic [ref=e48]:
              - paragraph [ref=e49]: "#6960eac0c941646b7a8b3e68"
              - heading "ZARA COAT 3" [level=3] [ref=e50]
              - paragraph [ref=e51]: MRP $ 11500
              - paragraph [ref=e52]: In Stock
            - paragraph [ref=e54]: $ 11500
            - generic [ref=e55]:
              - button "Buy Now❯" [ref=e56]
              - button "❯" [ref=e57]:
                - generic [ref=e58]: 
                - text: ❯
    - list [ref=e60]:
      - listitem [ref=e61]:
        - generic [ref=e62]: Subtotal
        - generic [ref=e63]: $23000
      - listitem [ref=e64]:
        - generic [ref=e65]: Total
        - generic [ref=e66]: $23000
      - listitem [ref=e67]:
        - button "Checkout❯" [ref=e68] [cursor=pointer]
```

# Test source

```ts
  1  | const {test,expect} = require ('@playwright/test');
  2  | test('Rahul Shetty Practice Website', async ({browser})=>
  3  | {
  4  |     const context = await browser.newContext();
  5  |     const page = await context.newPage();
  6  |     const userEmail = page.locator('#userEmail');
  7  |     const password = page.locator('#userPassword');
  8  |     const cardTitle = page.locator('.card-body b');
  9  |     const products = page.locator('.card-body');
  10 |     const productName = "ZARA COAT 3";
  11 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  12 |     console.log(await page.title());
  13 |     //await expect(page).toHaveTitle("Let's Shop");
  14 |     await userEmail.fill("nemishra2295@gmail.com");
  15 |     await password.fill("22041995@April");
  16 |     await page.locator('#login').click();
  17 |     await page.waitForLoadState('networkidle');
  18 |     await cardTitle.first().waitFor();
  19 |     console.log(await cardTitle.allTextContents());
  20 |     const counts = await products.count();
  21 |     for (let i = 0; i<counts ; ++i)
  22 |         {
  23 |         if(await products.nth(i).locator("b").textContent() === productName) {
  24 |             await products.nth(i).locator("text = Add To Cart").click();
  25 |             break;
  26 |         }
  27 |     }
  28 |     await page.locator("[routerlink*='cart']").click();
  29 |     await page.locator("div li").first().waitFor();
> 30 |     const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
     |                                                                  ^ Error: locator.isVisible: Error: strict mode violation: locator('h3:has-text(\'ZARA COAT 3\')') resolved to 2 elements:
  31 |     expect(bool).toBeTruthy();
  32 |     await page.locator("text=Checkout").last().click();
  33 |     await page.locator("input[value='4542 9931 9292 2293']").fill("4008 9567 9210 2001");
  34 |     await page.locator('select.input.ddl').first().selectOption("05");
  35 |     await page.locator('select.input.ddl').last().selectOption("20");
  36 |     await page.locator('input[type="text"]').nth(1).fill('246');
  37 |     await page.locator('input[type="text"]').nth(2).fill('Neha Mishra');
  38 |     await page.locator('input[type="text"]').nth(3).fill('rahul shetty');
  39 |     //await page.locator("button[type='submit']").click();
  40 |     await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});
  41 |     const dropdown = page.locator(".ta-results");
  42 |     await dropdown.waitFor();
  43 |     const options = await dropdown.locator("button").count();
  44 |     for (let i=0;i<options;++i){
  45 |     const country = await dropdown.locator("button").nth(i).textContent();
  46 |         if (country.trim() === "India"){
  47 |             await dropdown.locator("button").nth(i).click();
  48 |             break;
  49 |         }
  50 |     }
  51 |     const emailText = await page.locator(".user__name label").first().textContent();
  52 |       console.log(emailText);
  53 |     await expect (page.locator(".user__name label").first()).toHaveText("nemishra2295@gmail.com");
  54 |     await page.locator(".action__submit").click();
  55 |     await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  56 |     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  57 |     console.log("Order ID:", orderId); 
  58 |     await page.locator("button[routerlink*='myorders']").click();
  59 |    await page.locator("tbody").waitFor();
  60 |    const rows = await page.locator("tbody tr");
  61 |  
  62 |  
  63 |    for (let i = 0; i < await rows.count(); ++i) {
  64 |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  65 |       if (orderId.includes(rowOrderId)) {
  66 |          await rows.nth(i).locator("button").first().click();
  67 |          break;
  68 |       }
  69 |    }
  70 |    const orderIdDetails = await page.locator(".col-text").textContent();
  71 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  72 |  
  73 | })
```