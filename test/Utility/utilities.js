class Utilities{
    textToNumber(text){
      return parseFloat(text.replace(/[Total:$,x]/g,""));
    }
  
  }
  
  module.exports=new Utilities();