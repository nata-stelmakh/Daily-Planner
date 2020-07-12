// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

//1.Use paragraf with id "currentDay"and tie up with variable that will be a storage for moments.js function to display current day
var todayDay = moment().format("MMM Do YY");
var hourNow = moment().hours();

console.log(todayDay);
console.log(hourNow);

$("#currentDay").text(todayDay);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

//2.Create timeblocks for business hours from 7am till 7pm
//2.1 Each timeblock is an input in oder easily to edit
//2.2 that also has an initial block with a number indicating an hour
//2.3 and a block in the end of the row with symbol and a function to save(send to a local storage)

function createTimeBlocks() {
  for (i = 7; i <= 19; i++) {
    var hourNumberFormat = i + ":00";
    var inputGroup = $(
      "<div class='input-group mb-3' id='hour-" + i + "'>"
    ).appendTo(".container");
    var divForTimeTag = $("<div class='input-group-prepend'>").appendTo(
      inputGroup
    );
    var timeTag = $("<span class='input-group-text' id='basic-addon1'>")
      .text(hourNumberFormat)
      .appendTo(divForTimeTag);
    // WHEN I click into a timeblock
    // THEN I can enter an event

    //4.Each row in a timeblock should be made as an input form in order to easily edit info
    var newBlock = $(
      "<input type='text' class='form-control' class ='.time-block'>"
    ).appendTo(inputGroup);
    var divForSaveBtn = $("<div class='input-group-append'>").appendTo(
      inputGroup
    );
    var saveBtn = $("<button class='btn btn-outline-secondary' type='button'>")
      .text("Save")
      .appendTo(divForSaveBtn);

    // WHEN I view the timeblocks for that day
    // THEN each timeblock is color coded to indicate whether it is in the past, present, or future

    //3.Create a var hourNow that will contain current hour.
    //3.1 Compare the number value of a first block in each row with a a var hourNow
    //3.2 If-else statement that will assign a background color according to results of a comparison

    if (i < hourNow) {
      // -set attribute to an input with background color gray
      $(newBlock).addClass("past");
    } else if (i === hourNow) {
      // -set attribute to an input with background color red
      $(newBlock).addClass("present");
    } else {
      // -set attribute to an input with background color green
      $(newBlock).addClass("future");
    }

    $(".container").append(inputGroup);
  }
}
createTimeBlocks();

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

//get a text value of a task from a current timeblock when save button clicked and save into a local storage
//add a key to a text value in order to operate it better

$("button").on("click", function (event) {
  console.log("I got clicked!");
  var currentTask = $(this).parent().siblings("input").val();
  var key = $(this).parent().parent().attr("id");
  console.log(currentTask);
  console.log(key);
  localStorage.setItem(key, currentTask);
});

// WHEN I refresh the page
// THEN the saved events persist

// 6.Set the textcontent of a newBlock from a LocalStorage in order to have the saved tasks in place

for (i = 7; i <= 19; i++) {
  $("#hour-" + i + " input").val(localStorage.getItem("hour-" + i));
}

// });

// Here's an example of a input group from a bootstrap with classes and a layout that became a basis of a timeblock
//====================================
//  <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <button class="btn btn-outline-secondary" type="button">Button</button>
//   </div>
//   <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
//   <div class="input-group-append">
//     <button class="btn btn-outline-secondary" type="button">Button</button>
//   </div>
// </div>

//=====================================
