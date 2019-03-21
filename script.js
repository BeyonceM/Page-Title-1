$("button").click(function(){
      var beyonce= $(".beyonce").val(); 
          $("p").append("My name is "+beyonce+". ");
});
       
 $("button").click(function(){
     var color= $(".color").val(); 
        $("p").append("My favorite color is "+color+". ");
});
     $("button").click(function(){
     var food= $(".food").val(); 
        $("p").append("My favorite food is "+food+". ");
});
 $("button").click(function(){
     var year= $(".year").val(); 
        $("p").append(" I will be happy with my favorite food in "+year+". ");
});