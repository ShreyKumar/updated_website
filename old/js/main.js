$(document).ready(function(){
    $("#homelink").click(function(){
        $("html, body").animate({
            scrollTop: $("#home").offset().top
        }, 2000);
    });
    
    $("#worklink").click(function(){
        $("html, body").animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });
    $("#explink").click(function(){
        $("html, body").animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    });
    
    $("#contactlink").click(function(){
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});