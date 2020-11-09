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
    $(formEl[i]).css("background-color", "#d3d3d3");
  } else if (stateData == currentHour) {
    $(formEl[i]).css("background-color", "#ff6961");
  } else if (stateData > currentHour) {
    $(formEl[i]).css("background-color", "#77dd77");
  }
}

// Set up Local Storage
var saveButton = $(".btn");
saveButton.on("click", function (event) {
  event.preventDefault();
  var textBlock = $(formEl).val();
  localStorage.setItem("textBlock", textBlock);
});
for (var i = 0; i < 9; i++) {
var textEl = localStorage.getItem("textBlock");
$(formEl).text(textEl);
}
// console.log(textEl);
// console.log(formEl[i]);
console.log(currentHour);
console.log(stateData);
