class AppStateObjects{
    get menuBar(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get resetBtn(){
        return $("//a[@id='reset_sidebar_link']");
    }

    get logOutBtn(){
        return $("//a[@id='logout_sidebar_link']");
    }

    get crossBtn(){
        return $("//button[@id='react-burger-cross-btn']");
    }


}

module.exports=new AppStateObjects();