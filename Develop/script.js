// this function wraps the code so that the function waits until the page is loaded to execute the code. Source (https://stackoverflow.com/questions/30894981/how-important-it-is-to-wrap-jquery-code-in-document-ready-function)

$(document).ready(function () {
  var time_now = dayjs()
  $("#currentDay").text(time_now.format("MMM DD, YYYY hh:mm a")) //  set the time to reflect am/pm
  // TODO: save button
  // this is the save button funtion
  $(".saveBtn").on("click", function() {
    // var for the change in the discription attribute
    var save_text = $(this).siblings(".description").val()
    // var for the change in the id attribute
    var save_time = $(this).parent().attr("id")
    console.log(save_text, save_time)
    // saving the function to local storage
    localStorage.setItem(save_time, save_text)
    

  }) // end of the save button function

  // TODO: past, present future
  // setting current day information
  
  
  function hour_tracker() {
      //get current number of hours.
      var current_hour = dayjs().hour(); 

      // loop over time blocks
      $(".time-block").each(function () {
          var hour_block = parseInt($(this).attr("id").split("-")[1]);
          
          if (hour_block < current_hour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }else if (hour_block === current_hour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }// ends if section
      })//ends .time-block function
  }// ends hour_tracker function
  hour_tracker()


  $("#hour-7 .description").val(localStorage.getItem("hour-7"))
  $("#hour-8 .description").val(localStorage.getItem("hour-8"))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  $("#hour-18 .description").val(localStorage.getItem("hour-18"))
  $("#hour-19 .description").val(localStorage.getItem("hour-19"))
  $("#hour-20 .description").val(localStorage.getItem("hour-20"))



})// ends (doucment).ready section, Javascript END


