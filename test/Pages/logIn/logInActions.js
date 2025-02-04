const logInObjects=require("./logInObjects");

class LogInActions{
   
    async inputUserName(username){
       await logInObjects.userNameInputField.setValue(username);
    }

    async inputPassword(password){
        await logInObjects.passwordInputField.setValue(password);
     }

    async clickOnLogInBtn(){
        await logInObjects.logInBtn.click();
    }

    async errorMessage(){
        return await logInObjects.errorMsg.getText();
    }

}

module.exports=new LogInActions();