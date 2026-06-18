const playwright = require('@playwright/test')
const {Before,After,BeforeStep,AfterStep} = require('@cucumber/cucumber')
const {POManager} = require('../../pageobjects/POManager')

Before(async function(){

const browser = await playwright.chromium.launch({
    headless : false
});

const context = await browser.newContext();
this.page = await context.newPage();
this.poManager = new POManager(this.page);

});

BeforeStep( function(){
    //
});

After(function(){
    console.log("I'm the last one to execute");
});

AfterStep(async function({result}){
    if(result.status === Status.FAILED){
        await this.page.screenshot({path : 'screenshot.png'});
    }
})