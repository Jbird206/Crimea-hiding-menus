$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").toggle();
      $("#walrus-hidden").toggle();
    });
    $("#btn1").click(function(){
        $("#new").fadeOut();
      });
      $("#btn2").click(function(){
        $("#new").fadeIn();        
      });
      $("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
      });
      $("#flip").click(function(){
        $("#panel").slideToggle(1000);
      });  
  });