// function will execute when the DOM is fully loaded
$(document).ready(function () {
  // Shows the current date under the title
  var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDay);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Button event listener get a variable for what hour it is when clicking the save button and the input on that hour from the user
  // Also when button is clicked the input for that hour and what hour it is is saved to local storage
  $('.saveBtn').on('click', function() {
    var currentHour = $(this).parent().attr('id');
    var input = $(this).parent().children('textarea').val();
    console.log(currentHour);
    console.log(input);

    localStorage.setItem(currentHour, input);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $('.time-block').each(function() {
    
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

