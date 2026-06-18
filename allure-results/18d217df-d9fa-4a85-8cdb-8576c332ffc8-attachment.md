# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Yahoo-Gmail.spec.js >> Yahoo user sees Access Denied when viewing gmail user booking
- Location: tests\Yahoo-Gmail.spec.js:20:1

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | const {test,expect,request} = require('@playwright/test');
  2  | 
  3  | let token;
  4  | const BASE_URL = "https://eventhub.rahulshettyacademy.com";
  5  | const API_URL = "https://api.eventhub.rahulshettyacademy.com/api";
  6  | 
  7  | const GMAIL_USER = { email: 'nemishra2295@gmail.com', password: '22041995@April' };
  8  | const YAHOO_USER = { email: 'nemishra2295@yahoo.com', password: '22041995@April' };
  9  | 
  10 | async function LoginAs (page,user){
  11 |      await page.goto(`${BASE_URL}/login}`);
  12 |      await page.getByPlaceholder("you@email.com").fill("nemishra2295@gmail.com");
  13 |      await page.getByPlaceholder("••••••").fill("22041995@April");
  14 |      await page.locator("#login-btn").click();
  15 |      await expect(page.getByRole("link",{name : 'Browse Events →'})).toBeVisible();
  16 | }
  17 | 
  18 | 
  19 | 
  20 | test ("Yahoo user sees Access Denied when viewing gmail user booking", async ({page, request})=>{
  21 |    const loginRes =await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",{ data : {email : 'nemishra2295@gmail.com' , password : '22041995@April'}})
  22 |    expect(loginRes.ok()).toBeTruthy();
  23 |    const loginResJson = loginRes.json();
  24 |    token = loginResJson.token;
  25 | 
  26 |    const eventRes = await request.get("https://api.eventhub.rahulshettyacademy.com/api/auth/events", 
  27 |     {
  28 |     Headers : 
  29 |       { Authorization: `Bearer ${token}` },
  30 |       });
> 31 |          expect(eventRes.ok()).toBeTruthy();
     |                                ^ Error: expect(received).toBeTruthy()
  32 |     
  33 |   const bookngRes = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/bookings", {
  34 | 
  35 |   })
  36 | 
  37 | 
  38 | 
  39 | 
  40 |     })
```