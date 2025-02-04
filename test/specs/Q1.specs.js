const logInActions=require("../Pages/logIn/logInActions")


let lockedOutUsername="locked_out_user";
let password="secret_sauce";
let error="Epic sadface: Sorry, this user has been locked out.";

describe("Login with invalid credentials",()=>{
    it("LogIn with locked user",async()=>{
      await logInActions.inputUserName(lockedOutUsername);
      await logInActions.inputPassword(password);
      await logInActions.clickOnLogInBtn();
    });

    it("Verifying Error Message",async()=>{
      let actualError=await logInActions.errorMessage();
      let expectedError=error; 
      await expect(expectedError).toEqual(actualError);
    })
})
