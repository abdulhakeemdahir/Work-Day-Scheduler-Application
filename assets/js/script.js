// Setting up all Moment JS variables
var today = moment();
var currentDate = $("#currentDate").text(
  today.format("[Today is] dddd, MMM DD, YYYY")
);
var currentDay = $(".currentDay").text(today.format("dddd"));

var currentHour = parseInt(today.format("k"));

// Setting up conditionals with Data Attributes
var formEl = $(".form-control");
var stateHour = $(".hour");
for (var i = 0; i < 9; i++) {
  var stateData = $(stateHour[i]).attr("data-hour");
  if (stateData < currentHour) {
    $(formEl[i]).addClass("past");
  } else if (stateData == currentHour) {
    $(formEl[i]).addClass("present");
  } else if (stateData > currentHour) {
    $(formEl[i]).addClass("future");
  }
}

// Setting up the save button
var saveButton = $(".btn");
saveButton.on("click", function (event) {
  event.preventDefault();
  // Store a jQuery reference to the specific clicked button.
  var clickedButton = $(this);
  var hour = $(clickedButton).siblings("div").data("hour"); // This line will need to traverse from the button to the sibling div.hour and get the value of `data-hour`.
  var hourText = $(clickedButton).siblings("textarea").val(); // This line will need to traverse from the button to the sibling <textarea> and get the value.
  // Use the `hour` to build a dynamic storage key to save the `hourText`
  localStorage.setItem("hour-" + hour, hourText);
});
function getText() {
  for (var i = 9; i < 17; i++) {
    textInput = $("#hour-input-" + i);
    var textEl = localStorage.getItem("hour-" + i, "hourText");
    textInput.text(textEl);
  }
}

// Setting up the Clear functionality
clearButton = $("#clear-button");
clearButton.on("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  window.location.reload();
});
getText();
