/*
 * An object that stores the scores for each question. -1 if the user gets
 * the answer wrong
 */
var score = {
  'q1': 0,
  'q2': 0,
  'q3': 0,
  'q4': 0
}

/*
 * A helper function that updates the score in the score div on the main UI
 *
 */
function updateScore(){
  var totalScore = 0;
  for (item in score){
    if(score[item] > 0){
      totalScore += score[item];
    }
  }
  $(".score .score-placeholder").text(totalScore);
}

/*
 * Fades the timer in and automatically redirects to q+1 page in 5 sec
 */
function nextQuestion(q){
  $("#" + q + " .timer").show();

  //initiate countdown
  var sec = 5;
  var timer = setInterval(function() {
     $("#" + q + " .timer span").text(--sec);
     if (sec == 0) {
       $("#" + q ).fadeOut("slow", function(){
         $(this).removeClass("active");
         $(this).next().fadeIn("fast");
         $(this).next().addClass("active");
       });
       clearInterval(timer);
     }
  }, 1000);
}

/*
 * Fades out q page and goes back to the q-1 page
 */
function prevQuestion(q){
  $("#" + q ).fadeOut("slow", function(){
    $(this).removeClass("active");
    $(this).previous().fadeIn("fast");
    $(this).previous().addClass("active");
  });
}

/*
 * Adds the selected tag to an option from a list of options
 */
function selected(option, q){
  //remove any selected classes from all options first
  $("#" + q + " .options .option").removeClass("selected");

  //add selected class only to this selected option
  option.addClass("selected");
}

$(function(){
  //stop all inactive links from redircting
  $(".inactive").click(function(e){
    e.preventDefault();
  })

  /* Question 1 */
  //q1 select option
  $("#q1 .options .option").click(function(){
    if(!$(this).hasClass("selected")){
      //change UI to selected
      selected($(this), "q1");
    } else {
      $(this).removeClass("selected");
    }

    //slide all the explanations that are not this element
    $("#q1 .options .option .explanation").not(
                                  $(this).children(".explanation")).slideUp();

    //remove Class
    $("#q1 .options .display-all").removeClass("on");
    $(this).children(".explanation").slideToggle();

    //if display all hints is on
    if($("#q1 .options .display-all").hasClass("on")){
      $("#q1 .options .option").not($(this)).children(".explanation").slideUp();
    }

  })

  //display all function
  $("#q1 .options .display-all").click(function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      //slideDown all options
      $("#q1 .options .option .explanation").slideUp();
    } else {
      $(this).addClass("on");
      //slideUp all options
      $("#q1 .options .option .explanation").slideDown();
    }
  });

  //validate right answer
  $("#q1 .bottom_links .next").click(function(){
    //get index of selected answer
    var index = $("#q1 .options .option").index($("#q1 .options .selected"));

    if(index == 1){
      $("#q1 .options .selected").addClass("correct");

      //update score
      score["q1"] = 1;
      updateScore();

    } else {
      $("#q1 .options .selected").addClass("wrong");
      $("#q1 .options .option:nth-child(3)").removeClass("wrong")
      .addClass("correct");

      //update score
      score["q1"] = -1;
    }

    //go to next question
    nextQuestion("q1");

  });

  /* Question 2 */
  //q2 select option
  $("#q2 .options .option").click(function(){

    //count all selected options
    var allSelected = $("#q2 .options .option.selected").length;

    if($(this).hasClass("selected")){
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }

  })

  //check answers
  $("#q2 .check").click(function(){
    var allSelected = $("#q2 .options .option.selected").length;

    if(allSelected == 0){
      $("#q2 .explanation").text("Incorrect: Both words you chose are words " +
      "that Professors Gotlieb and Hume were quoted for in the OED.");
    } else if(allSelected == 1){
      $("#q2 .explanation").text("Your answer is incomplete.  " +
      "Please select another word.")
    } else if(allSelected > 2){
      $("#q2 .explanation").text("Only two words can be selected. " +
                                                "Please try again.");

      //clear all selected
      $("#q2 .options .option").removeClass("selected");
    } else {
      //2 words selected
      var first = $("#q2 .options .option.selected .answer")[0].innerHTML;
      var second = $("#q2 .options .option.selected .answer")[1].innerHTML;

      if((first.includes("function") &&
      second.includes("variable")) ||
      (first.includes("variable") &&
      second.includes("function"))){

        //both answers are correct
        $("#q2 .explanation").text("Yes!  It is hard to believe that words " +
        "we take for granted in computing were once so new.");

        //update score
        if(score["q2"] != -1){
          score["q2"] = 2;
          updateScore();
        }

      } else if(!(first.includes("function") ||
      first.includes("variable")) &&
      (second.includes("variable") ||
      second.includes("function"))){

        //first answer is wrong but second is correct
        $("#q2 .explanation").html("Incorrect: You picked <b>" + second +
        "</b> correctly, but <b>" + first + "</b> is not one of the words that "
         + "Professors Gotlieb and Hume got credit for.")

         //update score
         score["q2"] = -1;
         updateScore();

      } else if ((first.includes("function") ||
      first.includes("variable")) &&
      !(second.includes("variable") ||
      second.includes("function"))){

        //first answer is wrong but second is correct
        $("#q2 .explanation").html("Incorrect: You picked <b>" + first +
        "</b> correctly, but <b>" + second + "</b> is not one of the words that"
         + "Professors Gotlieb and Hume got credit for.")

         //update score
         score["q2"] = -1;
         updateScore();

      } else {

        //no answer is correct
        $("#q2 .explanation").html("Incorrect: Both words you chose are words "
        + "that Professors Gotlieb and Hume were quoted for in the OED.");

        //update score
        score["q2"] = -1;
        updateScore();
      }

      $("#q2 .explanation").append("<br><br>Click Next to continue!");

    }

  })

  $("#q2 .bottom_links .next").click(function(){
    nextQuestion("q2");
  })

  $("#q2 .bottom_links .prev").click(function(){
    prevQuestion("q2");
  })

  /* Question 3 */
  $("#q3 .options.a .option").click(function(){
    var thisClass = $(this).attr("class");
    if(!thisClass.includes("match-")){
      //if user picks option for the first time
      $(this).addClass("selected match");
    } else {
      $(this).addClass("selected match");
      //remove UI "Matched With"
      $(this).children(".matched").remove();

      thisClass = thisClass.split(" ");
      for(var i = 0; i < thisClass.length; i++){
        if(thisClass[i].includes("match-option-")){
          $(this).removeClass(thisClass[i]);
          $("#q3 .options.b .option").removeClass("selected");
        }
      }
    }
    $("#q3 .options.a").fadeOut("slow", function(){
      $("#q3 .options.b").fadeIn("fast");
    })
  });

  $("#q3 .options.b .option").click(function(){
    if(!$(this).hasClass("selected")){

      $(this).addClass("selected");

      var firstClass = $("#q3 .options.a .match").attr("class").split(" ");
      for(var i = 0; i < firstClass.length; i++){
        if(firstClass[i].includes("option-")){
          $(this).addClass("match-"+firstClass[i]);
        }
      }

      var thisClass = $(this).attr("class").split(" ");
      for(var i = 0; i < thisClass.length; i++){
        if(thisClass[i].includes("option-") &&
        !thisClass[i].includes("match-")){

          var matchedWith = $(this).children("span").text();
          $("#q3 .options.a .match").addClass("match-"+thisClass[i]);
          $("#q3 .options.a .match").append("<span class='matched'>" +
          "Matched with " + matchedWith + "</span>");

          $("#q3 .options .option").removeClass("match");

          $("#q3 .options.b").fadeOut("slow", function(){
            $("#q3 .options.a ").fadeIn("fast");
          })
        }
      }

    }
    //otherwise, user tried to option that has already been selected
  })

  //answer validation
  $("#q3 .bottom_links .next").click(function(){
    var i;
    var matchA = "";
    var matchB = "";
    $("#q3 .options.a .option").each(function(i){
      var thisClass = $(this).attr("class").split(" ");

      matchB = "";
      matchA = "";

      for(var i = 0; i < thisClass.length; i++){
        if(thisClass[i].includes("match-option-") &&
                                      thisClass[i].includes("option-")){
          //if we get "match-option-"
          matchA = thisClass[i];
        } else if(thisClass[i].includes("option-") &&
                                      !thisClass[i].includes("match-option-")){
          //if we get "option-"
          matchB = thisClass[i];
        }
      }

      if(matchA == "match-"+matchB){
        //add 0.5 score
        score["q3"] += 0.5;
        updateScore();
      }

    })

    nextQuestion("q3");

  })

  $("#q3 .bottom_links .prev").click(function(){
    prevQuestion("q3");
  })

  /* Question 4 */
  $("#q4 .options .option").click(function(){
    //check if any options have first
    if($("#q4 .options .option").hasClass("switch")){

      //switch html content
      var first = $("#q4 .options .option.switch");

      var temp = first.html();
      var tempClass = first.attr("class");

      first.html($(this).html());
      first.removeAttr("class").addClass($(this).attr("class"));

      $(this).html(temp);
      $(this).removeAttr("class").addClass(tempClass);

      $("#q4 .options .option").removeClass("switch selected");
    } else {
      $(this).addClass("switch selected");
    }
  })

  //assume user has inputed correct order unless otherwise proven
  var correctOrder = true;
  $("#q4 .check").click(function(){
    //display dates
    $("#q4 .options .option .date").fadeIn("fast");

    //use .each() to iterate through every option
    var i;
    $("#q4 .options .option").each(function(i){
      var curr = i+1;
      var expected = "correct-" + curr;

      if(!$(this).attr("class").includes(expected)){
        //incorrect order break out of .each()
        $("#q4 .explanation").html("Incorect order! Please try again or" +
        "click finish to see the correct answer");
        correctOrder = false;
        return false;
      } else {
        correctOrder = true;
      };
    })
    if(correctOrder){
      $("#q4 .explanation").html("That's correct! Nice job! Click Finish " +
      "to end the quiz");
    }

  })

  $("#q4 .bottom_links .next").click(function(){
    if(correctOrder){
      score["q4"] = 1;
    } else {
      score["q4"] = -1;
    }
    console.log(score);
    updateScore();
    nextQuestion("q4");
  })

  /* End screen */
  $("#q5 .play-again").click(function(){
    //reload page to reset data
    location.reload();
  })

});
