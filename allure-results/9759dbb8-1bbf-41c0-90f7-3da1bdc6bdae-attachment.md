# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice2UI.spec.js >> Playwright special test
- Location: tests\Practice2UI.spec.js:2:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Checkout' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e5]:
    - link "ProtoCommerce" [ref=e6] [cursor=pointer]:
      - /url: "#"
    - list [ref=e7]:
      - listitem [ref=e8]:
        - link "Home" [ref=e9] [cursor=pointer]:
          - /url: /angularpractice
      - listitem [ref=e10]:
        - link "Shop" [ref=e11] [cursor=pointer]:
          - /url: /angularpractice/shop
  - generic [ref=e12]:
    - navigation [ref=e13]:
      - generic [ref=e14]:
        - link "ProtoCommerce Home" [ref=e15] [cursor=pointer]:
          - /url: "#"
        - list [ref=e17]:
          - listitem [ref=e18]:
            - generic [ref=e19] [cursor=pointer]:
              - text: Checkout ( 1 )
              - generic [ref=e20]: (current)
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "Shop Name" [level=1] [ref=e24]
        - generic [ref=e25]:
          - link "Category 1" [ref=e26] [cursor=pointer]:
            - /url: "#"
          - link "Category 2" [ref=e27] [cursor=pointer]:
            - /url: "#"
          - link "Category 3" [ref=e28] [cursor=pointer]:
            - /url: "#"
      - generic [ref=e29]:
        - generic [ref=e30]:
          - list [ref=e31]:
            - listitem [ref=e32]
            - listitem [ref=e33]
            - listitem [ref=e34]
          - listbox [ref=e35]:
            - img "Second slide" [ref=e37]
          - button "Previous" [ref=e38] [cursor=pointer]:
            - generic [ref=e40]: Previous
          - button "Next" [ref=e41] [cursor=pointer]:
            - generic [ref=e43]: Next
        - generic [ref=e44]:
          - generic [ref=e46]:
            - link [ref=e47] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e48]:
              - heading "iphone X" [level=4] [ref=e49]:
                - link "iphone X" [ref=e50] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e51]
              - paragraph [ref=e52]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e53]:
              - button "Add " [ref=e54] [cursor=pointer]:
                - text: Add
                - generic [ref=e55]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e57]:
            - link [ref=e58] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e59]:
              - heading "Samsung Note 8" [level=4] [ref=e60]:
                - link "Samsung Note 8" [ref=e61] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e62]
              - paragraph [ref=e63]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e64]:
              - button "Add " [ref=e65] [cursor=pointer]:
                - text: Add
                - generic [ref=e66]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e68]:
            - link [ref=e69] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e70]:
              - heading "Nokia Edge" [level=4] [ref=e71]:
                - link "Nokia Edge" [ref=e72] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e73]
              - paragraph [ref=e74]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e75]:
              - button "Add " [active] [ref=e76] [cursor=pointer]:
                - text: Add
                - generic [ref=e77]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e79]:
            - link [ref=e80] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e81]:
              - heading "Blackberry" [level=4] [ref=e82]:
                - link "Blackberry" [ref=e83] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e84]
              - paragraph [ref=e85]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e86]:
              - button "Add " [ref=e87] [cursor=pointer]:
                - text: Add
                - generic [ref=e88]: 
              - text: ★ ★ ★ ★ ☆
    - contentinfo [ref=e89]:
      - paragraph [ref=e91]: Copyright © ProtoCommerce 2018
```

# Test source

```ts
  1  | const {test,expect} = require ('@playwright/test');
  2  | test ( 'Playwright special test', async({browser,page})=>
  3  | {
  4  |     await page.goto("https://rahulshettyacademy.com/angularpractice/");
  5  |     await page.getByPlaceholder("password").fill("abc123");
  6  |     await page.getByLabel("Check me out if you Love IceCreams!").click();
  7  |     await page.getByLabel("Employed").check();
  8  |     await page.getByLabel("Gender").selectOption("Female");
  9  |    // await page.getByLabel("Date of Birth").fill("22-04-2026");
  10 |     await page.getByRole("button",{name : 'Submit'}).click();
  11 |     await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
  12 |     await page.getByRole("link",{name : 'Shop'}).click();
  13 |     await page.locator('app-card').filter({hasText : 'Nokia Edge'}).getByRole("button").click();
  14 |     await page.getByText("Nokia Edge").isVisible();
> 15 |     await page.getByRole("button", {name : 'Checkout'}).click();
     |                                                         ^ Error: locator.click: Test timeout of 50000ms exceeded.
  16 | 
  17 | 
  18 | })
```