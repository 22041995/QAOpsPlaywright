const {test,expect} = require('@playwright/test');
test('Handling Calender with Playwright', async({browser,page})=>
{
   await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   const month = "04";
    const date = "22";
    const year = "2027";
   
    
    const expectedLists = [month,date,year];

    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label__labelText').click();
    await page.locator('.react-calendar__navigation__label__labelText').click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(month-1)).click();
    await page.locator("//abbr[text()='"+date+"']").click();  

    const inputs = page.locator('.react-date-picker__inputGroup input');
    for(let i=0;i<expectedLists.length;i++){
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedLists[i]);
    }

})
