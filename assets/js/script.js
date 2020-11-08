// Setting up all Moment JS variables
var today = moment();
var currentDate = $("#currentDate").text(
  today.format("[Today is] dddd, MMM DD, YYYY")
);
var currentDay = $(".currentDay").text(today.format("dddd"));

var currentHour = today.format("k");

// Setting up conditionals with Data Attributes
var state = $(".hour");
var stateData = $(state.getAttribute("data-hour"));
if (stateData < currentHour) {
    $(state.setAttribute("class", ".past"));
}
state.attr("class","present");
console.log(state);
