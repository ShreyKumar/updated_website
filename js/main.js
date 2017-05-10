//hide everything at first except loading screen
window.onload = function(){
  console.log("hello");
}
$(function(){
  //$("section:not(#loading), footer").hide();
  $(window).on("load", function(){
    console.log("wut");
  });
  $(".start").mouseenter(function(){
    if($(".startu").hasClass("off")){
      $(".startu").animate({
        width: "+=125"
      }, 200);
      $(".startu").removeClass("off").addClass("on");
    }
  })
  $(".start").mouseout(function(){
    if($(".startu").hasClass("on")){
      $(".startu").animate({
        width: "-=125"
      }, 200);
      $(".startu").removeClass("on").addClass("off");
    }
  });

  //nav lnks
  $("nav .lnk a").mouseenter(function(){
    var und = $(this).children(".lnku");
    if(und.hasClass("off")){
      und.animate({
        width: "100%"
      }, 200);
      und.removeClass("off").addClass("on");
    }
  })

  $("nav .lnk a").mouseout(function(){
    var und = $(this).children(".lnku");
    if(und.hasClass("on")){
      und.animate({
        width: "13%"
      }, 200);
      und.removeClass("on").addClass("off");
    }
  })

  //slick.js
  $("#testimonials").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    nextArrow: "<i class='fa fa-chevron-circle-right next-arrow'></i>",
    prevArrow: "<i class='fa fa-chevron-circle-left prev-arrow'></i>"
  });

  $("#projects-container").slick({
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    nextArrow: "<i class='fa fa-chevron-circle-right next-arrow'></i>",
    prevArrow: "<i class='fa fa-chevron-circle-left prev-arrow'></i>"
  });


  //jump up icon
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top <= 100){
      var opac = (top/100);
      $("#jumpup").css("opacity", opac);
    }
  })

  //smooth.min.js
  $("nav, #jumpup-container, .start").smoothScroll(1000);

})
