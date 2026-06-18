const {test,expect,request} = require('@playwright/test');

let token;
const BASE_URL = "https://eventhub.rahulshettyacademy.com";
const API_URL = "https://api.eventhub.rahulshettyacademy.com/api";

const GMAIL_USER = { email: 'nemishra2295@gmail.com', password: '22041995@April' };
const YAHOO_USER = { email: 'nemishra2295@yahoo.com', password: '22041995@April' };

async function LoginAs (page,user){
     await page.goto(`${BASE_URL}/login}`);
     await page.getByPlaceholder("you@email.com").fill("nemishra2295@gmail.com");
     await page.getByPlaceholder("••••••").fill("22041995@April");
     await page.locator("#login-btn").click();
     await expect(page.getByRole("link",{name : 'Browse Events →'})).toBeVisible();
}



test ("Yahoo user sees Access Denied when viewing gmail user booking", async ({page, request})=>{
   const loginRes =await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",{ data : {email : 'nemishra2295@gmail.com' , password : '22041995@April'}})
   expect(loginRes.ok()).toBeTruthy();
   const loginResJson = loginRes.json();
   token = loginResJson.token;

   const eventRes = await request.get("https://api.eventhub.rahulshettyacademy.com/api/auth/events", 
    {
    Headers : 
      { Authorization: `Bearer ${token}` },
      });
         expect(eventRes.ok()).toBeTruthy();
    
  const bookngRes = await request.post("https://api.eventhub.rahulshettyacademy.com/api/auth/bookings", {

  })




    })