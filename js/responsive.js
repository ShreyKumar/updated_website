$(function(){
  /* Hacky JavaScript coming through choo choo */
  $(".bars").click(function(){
    $("nav").slideToggle();
  })
  //close nav if click on a link or if scrolls past element
  $("nav .lnk a").click(function(){
    $("nav").slideUp();
  });
  var past_length = $("#home").offset().top + $("#home").outerHeight();
  $(window).scroll(function(){
    if($(window).scrollTop() > past_length){
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
