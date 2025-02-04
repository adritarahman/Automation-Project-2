class OrderObjects{

    get orderMessage(){
        return $("//h2[@class='complete-header']");
    }

}

module.exports=new OrderObjects();