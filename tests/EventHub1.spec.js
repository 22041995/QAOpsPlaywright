const {test,expect} = require ('@playwright/test');
test ('@web Book 1 ticket', async({browser,page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("nemishra2295@gmail.com");
    await page.getByPlaceholder("••••••").fill("22041995@April");
    await page.locator("#login-btn").click();
    await expect(page.getByRole("link",{name : 'Browse Events →'})).toBeVisible();
    await page.locator("#nav-events").click();
    await page.locator('[data-testid="event-card"]').locator('[data-testid="book-now-btn"]').first().click();
    await page.locator("#customerName").fill("Neha Mishra");
    await page.locator('[type="email"]').fill("nemishra2295@gmail.com");
    await page.getByLabel("phone").fill("+91 10987654432");
    await expect (page.locator('#confirm-booking')).toBeVisible();
    await page.locator('#confirm-booking').click();
    await page.locator('[data-testid="nav-bookings"]').click();
    await expect (page.getByRole("heading",{name : 'My Bookings'})).toBeVisible();
    const bookingRef = await page.getByText("D-DEXTCU").innerText();
    const eventTitle = await page.getByText("Dilli Diwali Mela").first().innerText();
    expect(bookingRef.charAt(0)).toBe(eventTitle.charAt(0));
    await page.getByRole("button",{name : 'View Details'}).first().click();
    await page.locator("#check-refund-btn").click();
    await expect(page.locator("#refund-spinner")).toBeVisible();
    await expect(page.locator('#refund-spinner')).not.toBeVisible({ timeout: 6000 });
    const refundText =await page.locator("span strong").textContent("Eligible for refund.");
    //await expect(page.getByText(" Single-ticket bookings qualify for a full refund.")).toBeVisible();
    //const eligible = await expect(page.getByText("Eligible for refund.")).innerText();
    //const text= await expect(page.getByText(" Single-ticket bookings qualify for a full refund.")).innerText();
    console.log(refundText);
  


})