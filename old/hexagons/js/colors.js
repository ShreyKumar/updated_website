$(document).on('ready', function(){
    var rows = $("#canvas > div");
    for(var i = 3; i <= 24; i++){
        //assign colors
        var r = Math.floor((Math.random() * 255) + 1);
        var g = Math.floor((Math.random() * 255) + 1);
        var b = Math.floor((Math.random() * 255) + 1);
        $("#canvas div:nth-child("+i+")").css("background-color", "rgb("+r+", "+g+", "+b+")");
        
        
        //manipulate pseudo elements :after and :before
        document.styleSheets[0].addRule("#canvas div:nth-child("+i+"):before",
        "border-bottom: 20px solid rgb(" +r+", "+g+", "+b+")");
        document.styleSheets[0].addRule("#canvas div:nth-child("+i+"):after",
        "border-top: 20px solid rgb(" +r+", "+g+", "+b+")");
        
    }
    
    $(".hexagon:not(.unactive)").mouseenter(function(){
        $(this).addClass("unactive");
    });
    $(".hexagon:not(.unactive)").mouseleave(function(){
        $(this).removeClass("unactive");
    });
});