// function will execute when the DOM is fully loaded
$(document).ready(function () {
  
  // Button event listener get a variable for what hour it is when clicking the save button and the input on that hour from the user
  // Also when save button is clicked the input for that hour and what hour it is is saved to local storage
  $('.saveBtn').on('click', function() {
    var currentHour = $(this).parent().attr('id');
    var input = $(this).parent().children('textarea').val();
    console.log(currentHour);
    console.log(input);
    
    localStorage.setItem(currentHour, input);
  })

  // applies the past, present, or future class to each time block depending on the current time
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id');
    var currentTime = dayjs().format('HH');
    
    if (timeBlock < currentTime) {
      $(this).addClass('past');
    } else if (timeBlock === currentTime) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
  // Code grabs the values saved in time-block earlier and puts stored values into the textarea element
  $('.time-block').each(function() {
    var workHour = $(this).attr('id');
    var workTask = localStorage.getItem(workHour);
    $(this).children('textarea').val(workTask);
  })
  // Shows the current date in the header of the page.
  var currentDay = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDay);
});

