const OrderObjects=require("./orderObjects");

class OrderActions{
    
    async successfulOrderMessage(){
        return await OrderObjects.orderMessage.getText();
    }



}

module.exports=new OrderActions();