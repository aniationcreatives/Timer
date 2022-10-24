var timer_time = "";

$(".btn").on("click", function (event) {
  min = 0;
  sec = 0;
  var button_clicked = event.target.id;
  if (
    button_clicked === "15" ||
    button_clicked === "30" ||
    button_clicked === "45" ||
    button_clicked === "60"
  ) {
    // window.location.href = "timer.html";
    min = button_clicked - 1;
    sec = 59;
  } else {
    $("#buttons").show();
    $("#timmer").hide();
    button_clicked = 0;
  }

  if (button_clicked > 0) {
    $("#buttons").hide();
    $("#timmer").show();
    timer_time = min + ":" + sec;
    $("#timer-text").text(timer_time);
    mytimmer = setInterval(function () {
      timmer();
      if (sec == 0 && min == 0) {
        clearInterval(mytimmer);

        $("#buttons").show();
        $("#timmer").hide();
      }
    }, 1000);
  }
});

function timmer() {
  if (sec > 0) {
    sec = sec - 1;
  } else if (sec == 0 && min > 0) {
    sec = 59;
    min = min - 1;
  }
  timer_time = min + ":" + sec;
  $("#timer-text").text(timer_time);
}
