$(document).on('ready resize', function(){
    var size = $(window).width();
    var curr;
    var toadd;
    if(size > 1132){
        //add 6 hexagons to each row
        addhexs(6);
    } else if(size < 1132 && size >= 947){
        addhexs(5);
        //add 4 more in new row
        extra_row(5, 4);
    } else if(size < 947 && size >= 761){
        addhexs(4);
        extra_row(5, 4);
        extra_row(6, 4);
    } else if(size < 761 && size >= 575){
        addhexs(3);
        for(var i = 5; i <= 8; i++){
            extra_row(i, 3);
        }
    } else if(size < 575 && size >= 389){
        addhexs(2);
        for(var i = 5; i <= 12; i++){
            extra_row(i, 2);
        }
    } else if(size < 389){
        addhexs(1);
        for(var i = 5; i <= 23; i++){
            extra_row(i, 1);
        }
    }

    function extra_row(rowno, hextoadd){
        var offset = (rowno-1)*-60;
        if($("#canvas > .hex-row:last").hasClass("hex-row-a")){
            $("#canvas").append("<div class='hex-row hex-row-b extra'></div>");
        } else {
            $("#canvas").append("<div class='hex-row hex-row-a extra'></div>");
        }
        for(var i = 0; i< hextoadd; i++){
            $(".hex-row:nth-child("+rowno+")").append("<div class='hexagon'></div>");
            $(".hex-row:nth-child("+rowno+")").css("top", offset+"px");
        }
    }

    function addhexs(toadd){
        //add all the hexagons
        for(var i = 1; i <= 4; i++){
            curr = $("#canvas > .hex-row:nth-child("+i+")");
            for(var j = 0; j < toadd; j++){
                curr.append("<div class='hexagon'></div>");
            }
            //extra unactive class to first row
            $("#canvas > #first > .hexagon").first().addClass("unactive");

            $("#canvas > #first > .hexagon").first().next().addClass("unactive");

        }
        
    }
});
        