var today = moment();
var currentDate = $("#currentDate").text(
  today.format("[Today is] dddd, MMM DD, YYYY")
);
var currentDay = $(".currentDay").text(today.format("dddd"));
