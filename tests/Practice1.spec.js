const {test,expect} = require ('@playwright/test');
test('Rahul Shetty Practice Website', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const cardTitle = page.locator('.card-body b');
    const products = page.locator('.card-body');
    const productName = "ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    //await expect(page).toHaveTitle("Let's Shop");
    await userEmail.fill("nemishra2295@gmail.com");
    await password.fill("22041995@April");
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    await cardTitle.first().waitFor();
    console.log(await cardTitle.allTextContents());
    const counts = await products.count();
    for (let i = 0; i<counts ; ++i)
        {
        if(await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text = Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").last().click();
    await page.locator("input[value='4542 9931 9292 2293']").fill("4008 9567 9210 2001");
    await page.locator('select.input.ddl').first().selectOption("05");
    await page.locator('select.input.ddl').last().selectOption("20");
    await page.locator('input[type="text"]').nth(1).fill('246');
    await page.locator('input[type="text"]').nth(2).fill('Neha Mishra');
    await page.locator('input[type="text"]').nth(3).fill('rahul shetty');
    //await page.locator("button[type='submit']").click();
    await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:150});
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const options = await dropdown.locator("button").count();
    for (let i=0;i<options;++i){
    const country = await dropdown.locator("button").nth(i).textContent();
        if (country.trim() === "India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    const emailText = await page.locator(".user__name label").first().textContent();
      console.log(emailText);
    await expect (page.locator(".user__name label").first()).toHaveText("nemishra2295@gmail.com");
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log("Order ID:", orderId); 
    await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
})