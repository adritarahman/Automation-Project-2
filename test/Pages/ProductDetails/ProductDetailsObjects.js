class ProductDetailsObjects{
    get ATCproduct1(){
        return $("(//div[@class='inventory_item'])[1]/descendant::button[contains(text(),'Add to cart')]");
    }

    get ATCproduct2(){
        return $("(//div[@class='inventory_item'])[2]/descendant::button[contains(text(),'Add to cart')]");
    }

    get ATCproduct3(){
        return $("(//div[@class='inventory_item'])[3]/descendant::button[contains(text(),'Add to cart')]");
    }

    get Product1(){
        
        return $("(//div[@class='inventory_item'])[1]/descendant::div[@class='inventory_item_name ']");
    }

    get Product2(){
       
        return $("(//div[@class='inventory_item'])[2]/descendant::div[@class='inventory_item_name ']");
    }

    get Product3(){
       
       return $("(//div[@class='inventory_item'])[3]/descendant::div[@class='inventory_item_name ']")
    }

    get product1Price(){

        return $("(//div[@class='inventory_item'])[1]/descendant::div[@class='inventory_item_price']")
        
    }

    get product2Price(){

        return $("(//div[@class='inventory_item'])[2]/descendant::div[@class='inventory_item_price']");
        
    }

    get product3Price(){

        return $("(//div[@class='inventory_item'])[3]/descendant::div[@class='inventory_item_price']");
        
    }

    get cartBtn(){
        return $("//a[@class='shopping_cart_link']");
    }
    
    get checkOutBtn(){
        return $("//button[@id='checkout']");
    }
}

module.exports=new ProductDetailsObjects();