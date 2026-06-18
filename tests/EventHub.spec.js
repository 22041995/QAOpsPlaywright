const {test,expect} = require ('@playwright/test');
test ('EvenHub test', async({browser,page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/login");
    await page.getByPlaceholder("you@email.com").fill("nemishra2295@gmail.com");
    await page.getByLabel("password").fill("22041995@April");
    await page.locator("#login-btn").click();
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    await page.locator('button.flex').click();
    await page.locator('.absolute a').first().click();
    await page.locator("#event-title-input").fill("Fifa World Cup 2026");
    await page.locator("#admin-event-form textarea").fill("Fifa World Cup-2026 in Canada");
    await page.getByLabel("City").fill("Toronto");
    await page.getByLabel("Venue").fill("Stadium-Toronto");
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill("2026-06-27T05:00");
    await page.getByRole('spinbutton', { name: 'Price ($)*' }).fill('50');
    await page.getByRole('spinbutton', { name: 'Total Seats*' }).fill("500");
    await page.locator("#add-event-btn").click();
    await expect (page.getByText('Event created!')).toBeVisible();
    await page.locator("#nav-events").click();
    const eventCards = await page.getByText("event-card")
    await page.getByRole('link', { name: 'Fifa World Cup' }).nth(1).click();
    await page.getByPlaceholder("Your full name").fill("Neha Mishra");
    await page.getByPlaceholder("you@email.com").fill("nemishra2295@gmail.com");
    await page.getByPlaceholder("+91 98765 43210").fill("+91 10987654432");
    await page.getByRole("button",{name : "Confirm Booking"}).click();
    const bookingText = await page.locator("h3.text-xl").textContent();
    await expect(page.locator("h3.text-xl")).toHaveText("Booking Confirmed! 🎉");
    console.log(bookingText);
    


})

