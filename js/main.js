$(function(){
  $(".start").mouseenter(function(){
    if($(".startu").hasClass("off")){
      $(".startu").animate({
        width: "+=125"
      }, 500);
      $(".startu").removeClass("off").addClass("on");
    }
  })
  $(".start").mouseout(function(){
    if($(".startu").hasClass("on")){
      $(".startu").animate({
        width: "-=125"
      }, 500);
      $(".startu").removeClass("on").addClass("off");
    }
  })

  //slick.js
  $("#testimonials").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    nextArrow: "<i class='fa fa-arrow-circle-right next-arrow'></i>",
    prevArrow: "<i class='fa fa-arrow-circle-left prev-arrow'></i>"
  });
  
  $("#projects-container").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    nextArrow: "<i class='fa fa-arrow-circle-right next-arrow'></i>",
    prevArrow: "<i class='fa fa-arrow-circle-left prev-arrow'></i>"
  });
  //load recommendations linkedin api

})
