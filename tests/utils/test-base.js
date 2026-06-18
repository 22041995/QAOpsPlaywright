const base = require ('@playwright/test');

exports.customtest = base.test.extend (
{
    testDataForOrder : {
        username : "nemishra2295@gmail.com",
        passowrd : "22041995@April",
        productName : "ADIDAS ORIGINALS"
    }

}
)
