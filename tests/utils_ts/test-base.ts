import {test as baseTest}  from '@playwright/test';

interface TestDataForOrder {
    username: string;
    passowrd: string;
    productName: string; 
};
export const customTest = baseTest.extend<{testDataForOrder : TestDataForOrder}> (
{
    testDataForOrder : {
        username : "nemishra2295@gmail.com",
        passowrd : "22041995@April",
        productName : "ADIDAS ORIGINALS"
    }

}
)
