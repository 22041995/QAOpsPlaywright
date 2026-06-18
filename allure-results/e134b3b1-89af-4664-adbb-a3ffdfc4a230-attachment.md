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
            - img "First slide" [ref=e37]
            - img "Second slide" [ref=e39]
          - button "Previous" [ref=e40] [cursor=pointer]:
            - generic [ref=e42]: Previous
          - button "Next" [ref=e43] [cursor=pointer]:
            - generic [ref=e45]: Next
        - generic [ref=e46]:
          - generic [ref=e48]:
            - link [ref=e49] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e50]:
              - heading "iphone X" [level=4] [ref=e51]:
                - link "iphone X" [ref=e52] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e53]
              - paragraph [ref=e54]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e55]:
              - button "Add " [ref=e56] [cursor=pointer]:
                - text: Add
                - generic [ref=e57]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e59]:
            - link [ref=e60] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e61]:
              - heading "Samsung Note 8" [level=4] [ref=e62]:
                - link "Samsung Note 8" [ref=e63] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e64]
              - paragraph [ref=e65]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e66]:
              - button "Add " [ref=e67] [cursor=pointer]:
                - text: Add
                - generic [ref=e68]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e70]:
            - link [ref=e71] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e72]:
              - heading "Nokia Edge" [level=4] [ref=e73]:
                - link "Nokia Edge" [ref=e74] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e75]
              - paragraph [ref=e76]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e77]:
              - button "Add " [active] [ref=e78] [cursor=pointer]:
                - text: Add
                - generic [ref=e79]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=e81]:
            - link [ref=e82] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e83]:
              - heading "Blackberry" [level=4] [ref=e84]:
                - link "Blackberry" [ref=e85] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=e86]
              - paragraph [ref=e87]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=e88]:
              - button "Add " [ref=e89] [cursor=pointer]:
                - text: Add
                - generic [ref=e90]: 
              - text: ★ ★ ★ ★ ☆
    - contentinfo [ref=e91]:
      - paragraph [ref=e93]: Copyright © ProtoCommerce 2018
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