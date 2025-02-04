const cartObjects=require("./cartObjects");
const utilities=require("../../Utility/utilities")

class CartActions{
    async firstProductNameInCart(){
        return await cartObjects.firstProductFromCart.getText();
    }

    async secondProductNameInCart(){
        return await cartObjects.secondProductFromCart.getText();
    }

    async thirdProductNameInCart(){
        return await cartObjects.thirdProductFromCart.getText();
    }

    async taxValue(){
        const taxPrice=await cartObjects.tax.getText();
        return utilities.textToNumber(taxPrice);

    }

    async grandTotalPrice(){
        const Totalprice=await cartObjects.grandPriceFromCart.getText();
        return utilities.textToNumber(Totalprice);
    }

    async clickOnFinishBtn(){
        await cartObjects.finishBtn.click();
        await browser.pause(1000);
    }
}

module.exports=new CartActions();