const informationObjects=require("./informationObjects");

class InformationActions{
    async inputFirstName(firstname){
        await informationObjects.firstNameInputField.setValue(firstname);

    }

    async inputLastName(lastname){
        await informationObjects.lastNameInputField.setValue(lastname);
    }

    async inputPostalCode(postalcode){
        await informationObjects.postalCodeInputField.setValue(postalcode);
        await browser.pause(1000);
    }

    async clickOnContinueBtn(){
        await informationObjects.continueBtn.click();
    }
}

module.exports=new InformationActions();