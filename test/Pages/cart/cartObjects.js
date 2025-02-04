class CartObjects{
    get firstProductFromCart(){
        return $("(//div[@class='cart_item'])[1]/descendant::div[@class='inventory_item_name']");
    }

    get secondProductFromCart(){
        return $("(//div[@class='cart_item'])[2]/descendant::div[@class='inventory_item_name']");
    }

    get thirdProductFromCart(){
        return $("(//div[@class='cart_item'])[3]/descendant::div[@class='inventory_item_name']");
    }

    get grandPriceFromCart(){
        return $("//div[@class='summary_total_label']");
    }

    get tax(){
        return $("//div[@class='summary_tax_label']");
    }

    get finishBtn(){
        return $("//button[@id='finish']");
    }
}

module.exports=new CartObjects();