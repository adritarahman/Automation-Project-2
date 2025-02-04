const logInActions=require("../Pages/logIN/logInActions");
const appStateActions=require("../Pages/appState/appStateActions");
const ProductDetailsActions=require("../Pages/ProductDetails/ProductDetailsActions");
const informationActions=require("../Pages/Information/informationActions");
const cartActions=require("../Pages/cart/cartActions");
const orderActions = require("../Pages/Order/orderActions");


let standardUserName="standard_user";
let password="secret_sauce";

let expectedFirstProduct="";
let expectedSecondProduct="";
let expectedThirdProduct="";

let FirstProductPrice=0;
let SecondProductPrice=0;
let ThirdProductPrice=0;



let firstname="Adrita";
let lastname="Rahman";
let postalcode=1219;


let SuccessfulOrderMessage="Thank you for your order!";





describe("Purchase Journey with standard user",()=>{

    it("Login with standard user",async()=>{
       await logInActions.inputUserName(standardUserName);
       await logInActions.inputPassword(password);
       await logInActions.clickOnLogInBtn();
    });

    it("Reset App State",async()=>{
        await browser.pause(2000);
        await appStateActions.clickOnMenuBar();
        await appStateActions.clickOnResetBtn();
        await appStateActions.clickOnCrossBtn();
    });

    it("Add Product To Cart",async()=>{

       expectedFirstProduct=await ProductDetailsActions.firstProductName();
       expectedSecondProduct=await ProductDetailsActions.secondProductName();
       expectedThirdProduct=await ProductDetailsActions.thirdProductName();

       FirstProductPrice=await ProductDetailsActions.firstProductPrice();
       SecondProductPrice=await ProductDetailsActions.secondProductPrice();
       ThirdProductPrice=await ProductDetailsActions.thirdProductPrice();

        await ProductDetailsActions.addProduct1();
        await ProductDetailsActions.addProduct2();
        await ProductDetailsActions.addProduct3();


    
     });

    it("Navigate to the Checkout Page",async()=>{

        await browser.pause(1000);
        await ProductDetailsActions.clickOnATCbtn();
        await ProductDetailsActions.clickOnCheckOutBtn();

        await informationActions.inputFirstName(firstname);
        await informationActions.inputLastName(lastname);
        await informationActions.inputPostalCode(postalcode);
        
        await informationActions.clickOnContinueBtn();
    });

    it("Verifying Product Names in Cart Page",async()=>{

       
       let actualFirstProduct=await cartActions.firstProductNameInCart();
       let actualSecondProduct=await cartActions.secondProductNameInCart();
       let actualThirdProduct=await cartActions.thirdProductNameInCart();

       await expect(expectedFirstProduct).toEqual(actualFirstProduct);
       await expect(expectedSecondProduct).toEqual(actualSecondProduct);
       await expect(expectedThirdProduct).toEqual(actualThirdProduct);

    });

    it("Verifying Grand Total Price",async()=>{

        let Tax=await cartActions.taxValue();
        let expectedGrandTotal=FirstProductPrice+SecondProductPrice+ThirdProductPrice+Tax;

        let actutalGrandTotal=await cartActions.grandTotalPrice();

        await expect(expectedGrandTotal).toEqual(actutalGrandTotal);
        
        await browser.pause(1000);
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

    });


 })