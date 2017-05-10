$(document).ready(function(){
    var width = $(window).width();
    //pick a random number to find out the order
    var x = Math.floor((Math.random() * 2) + 1);
    var afirst = (x == 1);
    
    if(afirst){
        for(var i = 7; i <= 25; i++){
            $("#canvas > .hexagon:nth-child("+i+")").addClass("hex-row-b");
            if(i == 12){
                i = 18; //or 18
            }
        }
    } else {
        for(var i = 1; i <= 18; i++){
            $("#canvas > .hexagon:nth-child("+i+")").addClass("hex-row-b");
            if(i == 6){
                i = 12; // or 14
            }
        }
    }
});