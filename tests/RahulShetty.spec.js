const {test, expect} = require ('@playwright/test');
test (' First test case', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const products = page.locator('.card-body a');
    await userName.fill("rahulshetty");
    await page.locator('#password').fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    //console.log(await page.locator('.card-body a').first().textContent());
    //console.log(await page.locator('.card-body a').nth(1).textContent());
    await products.first().waitFor();
    console.log(await page.locator('.card-body a').allTextContents());
    
});
test ('UI controls', async({browser})=>
    {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*='documents-request']");
    await userName.fill("rahulshettyacademy");
    await page.locator('#password').fill("Learning@830$3mK2");
    await page.locator('.radiotextsty').last().click();
    await expect (page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#okayBtn').click();
    await page.locator('select.form-control').selectOption("consult");
    await page.locator('#terms').check();
    await expect(page.locator('#terms')).toBeChecked();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    await signIn.click();
    await page.pause();
});

test ('Chlid Windows handling', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const userName = page.locator('#username');

    const [newPage] = await Promise.all(
        [
    context.waitForEvent('page'),
    documentLink.click()
    ])
    const Text =await newPage.locator('.red').textContent();
    console.log(Text);
    const arrText = Text.split("@");
    const domain = arrText[1].split(" ")[0];
    console.log(domain);
    await userName.fill(domain);
    console.log(await userName.inputValue());


});
