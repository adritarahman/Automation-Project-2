const logInActions=require("../Pages/logIn/logInActions")


let lockedOutUsername="locked_out_user";
let password="secret_sauce";
let error="Epic sadface: Sorry, this user has been locked out.";
//to check whether the allure reporter is taking screenshot properly or not.
//let error="boom";

describe("Login with invalid credentials",()=>{
    it("LogIn with locked user",async()=>{
      await logInActions.inputUserName(lockedOutUsername);
      await logInActions.inputPassword(password);
      await browser.pause(1000);
      await logInActions.clickOnLogInBtn();
    });

    it("Verifying Error Message",async()=>{
      let actualError=await logInActions.errorMessage();
      let expectedError=error; 
      await expect(expectedError).toEqual(actualError);
    })
})
