const logInActions=require("../Pages/logIn/logInActions");
const appStateActions=require("../Pages/appState/appStateActions");
const filterActions=require("../Pages/filter/filterActions");
const ProductDetailsActions=require("../Pages/ProductDetails/ProductDetailsActions");
const informationActions=require("../Pages/Information/informationActions");
const cartActions=require("../Pages/cart/cartActions");
const orderActions = require("../Pages/Order/orderActions");


let GlitchUserName="performance_glitch_user";
let password="secret_sauce";

let firstname="Adrita";
let lastname="Rahman";
let postalcode=1219;

let expectedFirstProduct="";
let ProductPrice=0;

let SuccessfulOrderMessage="Thank you for your order!";

describe("Purchase With Glitch User",()=>{
    
    it("Login with glitch user",async()=>{

           await logInActions.inputUserName(GlitchUserName);
           await logInActions.inputPassword(password);
           await logInActions.clickOnLogInBtn();
        });
   
    it("Reset App State",async()=>{

           await browser.pause(2000);
           await appStateActions.clickOnMenuBar();
           await appStateActions.clickOnResetBtn();
           await appStateActions.clickOnCrossBtn();
        });
    
    it ("Filter by Name",async()=>{

           await filterActions.clickOnFilterBtn();
           await filterActions.selectOption();
       });

    it("Add the First Product To Cart",async()=>{

          expectedFirstProduct=await filterActions.firstProductName();
          ProductPrice=await filterActions.firstProductPrice();
           
           await browser.pause(2000);
           await filterActions.addFirstProductToCart();
           
       });

    it("Navigate to the checkOut Page",async()=>{

          await browser.pause(1000);
          await ProductDetailsActions.clickOnATCbtn();
          await ProductDetailsActions.clickOnCheckOutBtn();
          await informationActions.inputFirstName(firstname);
          await informationActions.inputLastName(lastname);
          await informationActions.inputPostalCode(postalcode);
          await informationActions.clickOnContinueBtn();
       
       });

     it("Verifying Product Names in Cart",async()=>{
           
           let actualFirstProduct=await cartActions.firstProductNameInCart();
           await expect(expectedFirstProduct).toEqual(actualFirstProduct);
          
       });

     it("Verifying Total Price in Cart",async()=>{
          
           let actualPrice=await cartActions.grandTotalPrice();
           let tax=await cartActions.taxValue();
           let expectedPrice=ProductPrice+tax;

           await expect(actualPrice).toEqual(expectedPrice);
           await cartActions.clickOnFinishBtn();
          

       });

      it("Verifying Successful Order Message",async()=>{
              let actualSuccessfulMessage=await orderActions.successfulOrderMessage();
              await expect(SuccessfulOrderMessage).toEqual(actualSuccessfulMessage); 
       });
      
      it("Reset App State and Log Out",async()=>{
              await appStateActions.clickOnMenuBar();
              await appStateActions.clickOnResetBtn();
              await appStateActions.clickOnLogOutBtn();
       })
   

})