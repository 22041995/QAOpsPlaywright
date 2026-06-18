const {test,expect} = require ('@playwright/test');
test('Rahul Shetty Practice Website', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userEmail = page.getByPlaceholder("email@example.com");
    const password = page.getByPlaceholder("enter your passsword");
    const cardTitle = page.locator('.card-body b');
    const products = page.locator('.card-body');
    const productName = "ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    //await expect(page).toHaveTitle("Let's Shop");
    await userEmail.fill("nemishra2295@gmail.com");
    await password.fill("22041995@April");
    await page.getByRole("button",{name : 'login'}).click();
    await page.waitForLoadState('networkidle');
    await cardTitle.first().waitFor();
    await page.locator('.card-body').filter({hasText : 'ZARA COAT 3'})
    .getByRole("button",{name : 'Add To Cart'}).click();
    await page.getByRole("listitem").getByRole("button",{name : 'Cart'}).click();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button",{name : 'Checkout'}).click();
    await page.locator("input[value='4542 9931 9292 2293']").fill("4008 9567 9210 2001");
    await page.locator('select.input.ddl').first().selectOption("05");
    await page.locator('select.input.ddl').last().selectOption("20");
    await page.locator('input[type="text"]').nth(1).fill('246');
    await page.locator('input[type="text"]').nth(2).fill('Neha Mishra');
    await page.locator('input[type="text"]').nth(3).fill('rahul shetty');
    //await page.locator("button[type='submit']").click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name : 'India '}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    //await expect (page.getByText("nemishra2295@gmail.com")).toBeVisible();
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
   await page.getByText("6a2ae16117ee3e78bad2c4db");
    await page.getByRole("button", {name :'ORDERS'}).click();
   await page.locator("tbody").waitFor();
   await page.getByText("6a2ae16117ee3e78bad2c4db");
 
})