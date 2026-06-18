const {test,expect} = require ('@playwright/test');
test('Playwright locators test', async({browser,page})=>
    {
     await page.goto("https://rahulshettyacademy.com/angularpractice/");
     await page.locator('input[name="name"]').first().fill("neha");
     await page.locator("input[name='email']").fill("nemishra2295@gmail.com");
     await page.locator("#exampleInputPassword1").fill("abc123");
     await page.locator('label[for="exampleCheck1"]').click();
     await page.locator("#exampleFormControlSelect1").selectOption("Female");
     await page.locator("#inlineRadio2").click();
    // await page.locator('input[name="bday"]').fill("22-04-2026");
     await page.locator('input[type="submit"]').click();
     await page.locator('[href*="shop"]').click();
     
     const products = await page.locator(".card");
     await products.first().waitFor();
     const counts = await products.count();
     for(let i=0;i<counts;++i){
        const productName= await products.nth(i).locator(".card-title a").textContent();
        console.log(productName);
            if(productName.trim() === 'Nokia Edge') {
           await products.nth(i).locator("button.btn-info").click();
            break;
        }
     }
     
})