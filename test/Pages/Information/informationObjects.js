class InformationObjects{
    get firstNameInputField(){
       return $("//input[@placeholder='First Name']");
    }

    get lastNameInputField(){
        return $("//input[@placeholder='Last Name']");
    }

    get postalCodeInputField(){
        return $("//input[@placeholder='Zip/Postal Code']");
    }

    get continueBtn(){
        return $("//input[@id='continue']");
    }
}

module.exports=new InformationObjects();