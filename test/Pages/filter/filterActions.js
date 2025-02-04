const filterObjects=require("./filterObjects");
const utilities=require("../../Utility/utilities");

class FilterActions{

    async clickOnFilterBtn(){
        await filterObjects.filterBtn.click();
        
    }

    async selectOption(){
        await filterObjects.option.click();
        
    }

    async addFirstProductToCart(){
        await filterObjects.firstProduct.click();
        await browser.pause(1000);
    }

    async firstProductName(){
       return await filterObjects.ProductName.getText();
    }

    async firstProductPrice(){
       let price= await filterObjects.firstProductPrice.getText();
       return utilities.textToNumber(price);
    }
}

module.exports=new FilterActions();