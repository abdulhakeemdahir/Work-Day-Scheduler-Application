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
var stateData = stateHour.attr("data-hour");
if (stateData < currentHour) {
  formEl.css("background-color", "#d3d3d3");
}
else if (stateData = currentHour) {
  formEl.css("background-color", "#ff6961");
}

else if (stateData > currentHour) {
  formEl.css("background-color", "#77dd77");
}

console.log(currentHour);
console.log(stateData);
