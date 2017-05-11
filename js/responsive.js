$(function(){
  /* Hacky JavaScript coming through choo choo */
  $(".bars").click(function(){
    $("nav").slideToggle();
  })
  $(window).resize(function(){
    if($(window).width() > 320){
      $("nav").show();
    } else {
      $("nav").hide();
    }
  })

})
