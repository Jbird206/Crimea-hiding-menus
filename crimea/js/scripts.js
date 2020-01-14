$(document).ready(function(){
    $("#flip1").click(function(){
      $("#panel1").slideDown("slow");
    });

    $("#flip2").click(function(){
        $("#panel2").slideDown("slow");
    });
    
    $("#flip3").click(function(){
        $("#panel3").slideDown("slow");
    });

    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background"); 
      $(".box").removeClass("box-background2");    
      $(".box").addClass("box-background");
    });
  
    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background"); 
      $(".box").removeClass("box-background");        
      $(".box").addClass("box-background2");
    });

    $("button#blue").click(function() {
      $(".box").removeClass("box-background2");        
      $(".box").addClass("box-background3");
    });
});