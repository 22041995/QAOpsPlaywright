import {expect , type Locator, type Page} from  '@playwright/test';

let message2: string = "Typescript";
console.log(message2);
message1 = "Learning";
let age2 : number = 25;
console.log(age2);
let isActivate : boolean = true;
console.log(isActivate);
let data1 : any = "this could be anything";
console.log(data1);
let arrNum : number[] = [4,5,6];

//functiom declaration
function add (a : number , b : number) : number 
{
    return a + b;
}
add(3,5);

//object
let user : {name : string, age : number} = {name: "Bob", age : 25};

//classes-constructors

class CartPage
{
    page : Page;
    cartProducts : Locator;
    productsText : Locator;
    cart : Locator;
    orders : Locator;
    checkout : Locator;



constructor(page :any)
{
    this.page = page;
    this.cartProducts = page.locator("div li").first();
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    this.checkout = page.locator("text=Checkout");

}
}