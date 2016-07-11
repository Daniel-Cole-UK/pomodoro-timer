var sessionMin = 25;
var sessionSec = 0;
var breakMin = 5;
var breakSec = 0;
var running = false;
var sessionOrBreak = "Session";
var pausedOnce = false;
var beenReset = false;

$(document).ready(function() {
  $("#sessionMins").html(sessionMin);
  $("#breakMins").html(breakMin);
});

$("#sessionMinus").click(function() {
  // If the timer has not been started, allow session minutes to be amended
  if (sessionMin > 1 && running === false && beenReset === false && pausedOnce === false) {
    sessionMin--;
    $("#sessionMins").html(sessionMin);
  // If the timer has been paused in session mode, but not reset, set minutes back to original then minus 1. Set seconds to 59. Set reset to true.
  } else if (sessionMin > 1 && running === false && beenReset === false && pausedOnce === true && sessionOrBreak === "Session") {
    sessionMin = (originalSessionMin ++);
    sessionMin--;
    sessionSec = 00;
    $("#sessionMins").html(sessionMin);
    beenReset = true;
    time = (sessionMin < 10 ? "0" + sessionMin : sessionMin) + ":" + (sessionSec < 10 ? "0" + sessionSec : sessionSec);
    $("#timer").html(time);    
  // If the timer has been paused and reset during session mode, minus one from minutes.
  } else if (sessionMin > 1 && running === false && beenReset === true && pausedOnce === true && sessionOrBreak === "Session") {
    sessionMin--;
    $("#sessionMins").html(sessionMin);
    time = (sessionMin < 10 ? "0" + sessionMin : sessionMin) + ":" + (sessionSec < 10 ? "0" + sessionSec : sessionSec);
    $("#timer").html(time);
  } else {
    if (sessionMin > -1 && sessionMin < 2 && running === false && beenReset === false && pausedOnce === true && sessionOrBreak === "Session") {
    sessionMin = 1;
    sessionSec = 0;
    beenReset = true;
    $("#sessionMins").html(sessionMin);
    time = (sessionMin < 10 ? "0" + sessionMin : sessionMin) + ":" + (sessionSec < 10 ? "0" + sessionSec : sessionSec);
    $("#timer").html(time);      
    }
  }
});

$("#sessionPlus").click(function() {
  // If the timer has not been started, allow session minutes to be amended
  if (sessionMin < 9999999 && running === false && beenReset === false && pausedOnce === false) {
    sessionMin++;
    $("#sessionMins").html(sessionMin);
  // If the timer has been paused, but not reset, set minutes back to original then add 1. Set seconds to 59. Set reset to true.
  } else if (sessionMin < 9999999 && running === false && beenReset === false && pausedOnce === true && sessionOrBreak === "Session") {
    sessionMin = (originalSessionMin --);
    sessionMin++;
    sessionSec = 00;
    $("#sessionMins").html(sessionMin);
    beenReset = true;
    time = (sessionMin < 10 ? "0" + sessionMin : sessionMin) + ":" + (sessionSec < 10 ? "0" + sessionSec : sessionSec);
    $("#timer").html(time);
  // If the timer has been paused and reset, minus one from minutes.
  } else if (sessionMin < 9999999 && running === false && beenReset === true && pausedOnce === true && sessionOrBreak === "Session") {
    sessionMin++;
    $("#sessionMins").html(sessionMin);
    time = (sessionMin < 10 ? "0" + sessionMin : sessionMin) + ":" + (sessionSec < 10 ? "0" + sessionSec : sessionSec);
    $("#timer").html(time);
  };   
});

$("#breakMinus").click(function() {
  // If the timer has not been started, allow break minutes to be amended
  if (breakMin > 1 && running === false && beenReset === false && pausedOnce === false) {
    breakMin--;
    $("#breakMins").html(breakMin);
  // If the timer has been paused in break mode, but not reset, set minutes back to original then minus 1. Set seconds to 59. Set reset to true.
  } else if (breakMin > 1 && running === false && beenReset === false && pausedOnce === true && sessionOrBreak === "Break") {
    breakMin = (originalBreakMin ++);
    breakMin--;
    breakSec = 00;
    $("#breakMins").html(breakMin);
    beenReset = true;
    time = (breakMin < 10 ? "0" + breakMin : breakMin) + ":" + (breakSec < 10 ? "0" + breakSec : breakSec);
    $("#timer").html(time);
  // If the timer has been paused and reset during break mode, minus one from minutes.
  } else if (breakMin > 1 && running === false && beenReset === true && pausedOnce === true && sessionOrBreak === "Break") {
    breakMin--;
    $("#breakMins").html(breakMin);
    time = (breakMin < 10 ? "0" + breakMin : breakMin) + ":" + (breakSec < 10 ? "0" + breakSec : breakSec);
    $("#timer").html(time);
  } else {
    if (breakMin > -1 && breakMin < 2 && running === false && beenReset === false && pausedOnce === true && sessionOrBreak === "Break") {
    breakMin = 1;
    breakSec = 0;
    beenReset = true;
    $("#breakMins").html(breakMin);
    time = (breakMin < 10 ? "0" + breakMin : breakMin) + ":" + (breakSec < 10 ? "0" + breakSec : breakSec);
    $("#timer").html(time);     
    }
  }
});

$("#breakPlus").click(function() {
  // If the timer has not been started, allow break minutes to be amended
  if (breakMin < 9999999 && running === false && beenReset === false && pausedOnce === false) {
    breakMin++;
    $("#breakMins").html(breakMin);
  // If the timer has been paused, but not reset, set minutes back to original then add 1. Set seconds to 59. Set reset to true.
  } else if (breakMin < 9999999 && running === false && beenReset === false && pausedOnce === true && sessionOrBreak === "Break") {
    breakMin = (originalBreakMin --);
    breakMin++;
    breakSec = 00;
    $("#breakMins").html(breakMin);
    beenReset = true;
    time = (breakMin < 10 ? "0" + breakMin : breakMin) + ":" + (breakSec < 10 ? "0" + breakSec : breakSec);
    $("#timer").html(time);
  // If the timer has been paused and reset, add 1 to minutes.
  } else if (breakMin < 9999999 && running === false && beenReset === true && pausedOnce === true && sessionOrBreak === "Break") {
    breakMin++;
    $("#breakMins").html(breakMin);
    time = (breakMin < 10 ? "0" + breakMin : breakMin) + ":" + (breakSec < 10 ? "0" + breakSec : breakSec);
    $("#timer").html(time);
  };
});

$(".timerContainer").click(function() {
  if (running === false) {
    set = setInterval(function() {
      decrement();
    }, 1000);
    beenReset = false;
    running = true;
    originalSessionMin = sessionMin;
    originalBreakMin = breakMin;
    if (sessionOrBreak === "Session" && pausedOnce === false) {
      $(".timerContainer").addClass("sessionGlow");
      document.getElementById('workNoise').play();
    }
    if (sessionOrBreak === "Session" && pausedOnce === true) {
      $(".timerContainer").addClass("sessionGlow");
    }
    if (sessionOrBreak === "Break") {
      $(".timerContainer").addClass("breakGlow");
    }
  } else {
    clearInterval(set);
    running = false;
    beenReset = false;
    if (sessionOrBreak === "Session") {
      $(".timerContainer").removeClass("sessionGlow");
      $(".timerContainer").addClass("pausedGlow");
      pausedOnce = true;
    }
    if (sessionOrBreak === "Break") {
      $(".timerContainer").removeClass("breakGlow");
      $(".timerContainer").addClass("pausedGlow");
      pausedOnce = true;
    }
    $("#sOB").html(sessionOrBreak + " Paused");
  }
});

function decrement() {
  if (sessionOrBreak == "Session") {
    //Minus 1 second
    sessionSec--;
    //If minutes are not 0 and the seconds hit 00, on the next iteration remove one minute and reset the seconds to 59
    if (sessionMin !== 0 && sessionSec === -1) {
      sessionSec = 59;
      sessionMin--;
    }
    //When counter hits zero switch to break
    if (sessionMin === 0 && sessionSec === -1) {
      sessionOrBreak = "Break";
      sessionMin = originalSessionMin;
      sessionSec = 0;
      $(".timerContainer").removeClass("sessionGlow");
      $(".timerContainer").addClass("breakGlow");
      document.getElementById('breakNoise').play();
      document.getElementById('dingNoise').play();
    }
    //Add leading zeros if required, insert colon
    time = (sessionMin < 10 ? "0" + sessionMin : sessionMin) + ":" + (sessionSec < 10 ? "0" + sessionSec : sessionSec);
  }

  if (sessionOrBreak == "Break") {
    //Minus 1 second
    breakSec--;
    //When the seconds hit 00, on the next iteration remove one minute and reset the seconds to 59
    if (breakMin !== 0 && breakSec === -1) {
      breakSec = 59;
      breakMin--;
    }
    //When counter hits zero switch to break and reset original session minutes
    if (breakMin === 0 && breakSec === -1) {
      sessionOrBreak = "Session";
      breakMin = originalBreakMin;
      breakSec = 0;
      $(".timerContainer").removeClass("breakGlow");
      $(".timerContainer").addClass("sessionGlow");
      document.getElementById('dingNoise').play();
      document.getElementById('workNoise').play();
    }
    //Add leading zeros if required, insert colon
    time = (breakMin < 10 ? "0" + breakMin : breakMin) + ":" + (breakSec < 10 ? "0" + breakSec : breakSec);
  }

  //Populate the clock element with the strings
  $("#timer").html(time);
  $("#sOB").html(sessionOrBreak);
}