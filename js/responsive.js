$(function(){
  /* Hacky JavaScript coming through choo choo */
  $(".bars").click(function(){
    $("nav").slideToggle();
  })
  //close nav if click on a link or if scrolls past element
  $("nav .lnk a").click(function(){
    $("nav").slideUp();
  });
  $(window).scroll(function(){
    if($(window).width() <= 1024 && $(window).scrollTop() > 0){
      $("nav").slideUp();
    }
  })

  $(window).resize(function(){
    if($(window).width() > 320){
      $("nav").show();
    } else {
      $("nav").hide();
    }
  })

})
