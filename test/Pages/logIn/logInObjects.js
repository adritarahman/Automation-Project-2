class LogInObjects{
    get userNameInputField(){
        return $("//input[@placeholder='Username']");
    }

    get passwordInputField(){
        return $("//input[@placeholder='Password']");
    }

    get logInBtn(){
        return $("//input[@value='Login']"); 
    }

    get errorMsg(){
        return $("//h3[@data-test='error']");
    }

    
}

module.exports=new LogInObjects();