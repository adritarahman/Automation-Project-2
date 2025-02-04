# Automation-Project-2

This project contains an automation test suite with 3 essential tasks for verifying an e-commerce(https://www.saucedemo.com/) platform's functionality:

Task 1: 
To log in with an invalid user id.

1.Verifying the error message.

Task 2:
To complete a purchase journey with a valid user id.

1.Logging in with a valid user id. 
2.Adding products to cart. 
3.Verifying products name and total price in cart. 
4.Resetting the app state and logging out. 

Task 3:
To complete the purchase journey with a valid user id.

1.Logging in with a valid user id. 
2.filtering the products by name (Z to A). 
3.Adding the first product to cart. 
4.Verifying product name and total price in cart. 
5.Resetting the app state and logging out. 


Tools and Frameworks Used:

1.Testing Framework: WebdriverIO 
2.Reporting: Allure Reporter 
3.Language: JavaScript 


Notes:

1.Ensure the e-commerce app is running before executing the tests. 
2.The tests are designed to run both individually and sequentially(manageable from wdio.config.js file). 
3.Allure reports are generated after each execution for detailed insights. 
4.To run the tests use command --> npm run wdio 
5.To run the report use command --> npm run getReport  


