const appStateObjects=require("./appStateObjects");

class AppStateActions{
    async clickOnMenuBar(){
        await appStateObjects.menuBar.click();
        await browser.pause(2000);
    }

    async clickOnResetBtn(){
        await appStateObjects.resetBtn.click();
        await browser.pause(2000);  
    }

    async clickOnCrossBtn(){
        await appStateObjects.crossBtn.click();
        await browser.pause(2000);    
    }

    async clickOnLogOutBtn(){
        await appStateObjects.logOutBtn.click();
        await browser.pause(2000);
    }
}

module.exports=new AppStateActions();