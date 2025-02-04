const productDetailsObjects=require("./ProductDetailsObjects");
const utilities=require("../../Utility/utilities");

class ProductDetailsActions{
    async addProduct1(){
        await productDetailsObjects.ATCproduct1.click();
        await browser.pause(1000);
    }

    async addProduct2(){
        await productDetailsObjects.ATCproduct2.click();
        await browser.pause(1000);
    }

    async addProduct3(){
        await productDetailsObjects.ATCproduct3.click();
        await browser.pause(1000);
    }

    async firstProductName(){
        return await productDetailsObjects.Product1.getText();
    }

    async secondProductName(){
        return await productDetailsObjects.Product2.getText();
    }

    async thirdProductName(){
        return await productDetailsObjects.Product3.getText();
    }

    async firstProductPrice(){
        const price1=await productDetailsObjects.product1Price.getText();
        return utilities.textToNumber(price1);

    }
     
    async secondProductPrice(){
        const price2=await productDetailsObjects.product2Price.getText();
        return utilities.textToNumber(price2);
    }

    async thirdProductPrice(){
        const price3=await productDetailsObjects.product3Price.getText();
        return utilities.textToNumber(price3);
    }

    async clickOnATCbtn(){
        await productDetailsObjects.cartBtn.click();
        await browser.pause(2000);
    }

    async clickOnCheckOutBtn(){
        await productDetailsObjects.checkOutBtn.click();
       await browser.pause(2000);
    }

}

module.exports=new ProductDetailsActions();