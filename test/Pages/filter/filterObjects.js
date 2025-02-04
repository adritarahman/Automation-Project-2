class FilterObjects{
    
    get filterBtn(){
        return $("//select[@class='product_sort_container']");
    }

    get option(){
        return $("//option[@value='za']");
    }

    get firstProduct(){
        return $("(//div[@class='inventory_item'])[1]/descendant::button[contains(text(),'Add to cart')]");
    }

    get firstProductPrice(){
        return $("(//div[@class='inventory_item_price'])[1]");
    }

    get ProductName(){
        return $("(//div[@class='inventory_item'])[1]/descendant::div[@class='inventory_item_name ']");
        
    }
}

module.exports=new FilterObjects();