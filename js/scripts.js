$(function(){
  $(".clickable").click(function(){
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });

  $(".clickable").click(function(){
    // $("#panel").fadeIn();
    // $("#panel").fadeOut();
    //$("#panel").fadeToggle();
    $("#panel").slideToggle();



  });
});
