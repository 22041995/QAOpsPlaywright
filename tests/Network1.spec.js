const { test , expect } = require('@playwright/test');

test('Security test request interception', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const userEmail = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    await userEmail.fill("nemishra2295@gmail.com");
    await password.fill("22041995@April");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({
            url:
                "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a2d908517ee3e78bad1331e"
        }));
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
})