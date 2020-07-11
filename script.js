
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


 
// var task = JSON.parse(localStorage.getItem("todo"));

function createTimeBlocks(){
    
     for( i = 7; i<=19;i++){
    hourNumberFormat = i + ":00"
    var inputGroup = $("<div class='input-group mb-3'>").appendTo(".container");
    var divForTimeTag = $("<div class='input-group-prepend'>").appendTo(inputGroup);
    var timeTag = $("<span class='input-group-text' id='basic-addon1'>").text(hourNumberFormat).appendTo(divForTimeTag);
    var newBlock = $("<input type='text' class='form-control' class ='.time-block'>").appendTo(inputGroup);
    var divForSaveBtn = $("<div class='input-group-append'>").appendTo(inputGroup);
    var saveBtn =$("<button class='btn btn-outline-secondary' type='button'>").text("Save").appendTo(divForSaveBtn);;
   
      
     
    if( i < parseInt(hourNow)){
        newBlock.css({"background-color": "#d3d3d3", "color": "white"});
    // -set attribute to an input with background color gray
    
    }else if (i = parseInt(hourNow)) { 
        // -set attribute to an input with background color red
        newBlock.css({"background-color": "#ff6961","color": "white"});
    }else{ 
        // -set attribute to an input with background color green
        newBlock.css({"background-color": "#77dd77","color": "white"});
    };
     $(".container").append(inputGroup)

 }
};
createTimeBlocks();

function addTask(inputGroup){


}

// $("button").on("click",function(event){

//     console.log("I got clicked!")
//     var currentTask = $(this).newBlock.text();
//     console.log(currentTask);
// })
//get a text from a current timeblock
//turn into a string
//send to a local storage


// WHEN I refresh the page
// THEN the saved events persist

// 6.Set the textcontent of a newBlock
// localestorage.getItem
// JSON parse()
// $("button").on('click', (event) => {
//     var clickedBlockTask = JSON.stringify(newBlock);
//     $(this).localStorage.setItem("task", clickedBlockTask); 
     
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

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//3.Create a var hourNow that will contain current hour.
//3.1 Compare the number value of a first block in each row with a a var hourNow
//3.2 If-else statement that will assign a background color according to results of a comparison
// - done and included in a function createTimeBlocks ln 36-46


// WHEN I click into a timeblock
// THEN I can enter an event

//4.Each row in a timeblock should be made as an input form in order to easily edit info
  // - done, look into a  newBlock structure ln 28-33



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

//5. Look into 2.3: a block in the end of the row with symbol and a function to save(send to a local storage)
// $("button").this.on("click") -
//get a text from a current timeblock
//turn into a string
//send to a local storage


// WHEN I refresh the page
// THEN the saved events persist

// 6.Set the textcontent of a newBlock
// localestorage.getItem
// JSON parse()
=======
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


 
// var task = JSON.parse(localStorage.getItem("todo"));

function createTimeBlocks(){
    
     for( i = 7; i<=19;i++){
    var hourNumberFormat = i + ":00"
    var inputGroup = $("<div class='input-group mb-3'>").appendTo(".container");
    var divForTimeTag = $("<div class='input-group-prepend'>").appendTo(inputGroup);
    var timeTag = $("<span class='input-group-text' id='basic-addon1'>").text(hourNumberFormat).appendTo(divForTimeTag);
    var newBlock = $("<input type='text' class='form-control' class ='.time-block'>").appendTo(inputGroup);
    var divForSaveBtn = $("<div class='input-group-append'>").appendTo(inputGroup);
    var saveBtn =$("<button class='btn btn-outline-secondary' type='button'>").text("Save").appendTo(divForSaveBtn);;
   
      
     
    if( i < parseInt(hourNow)){
        newBlock.css({"background-color": "#d3d3d3", "color": "white"});
    // -set attribute to an input with background color gray
    
    }else if (i = parseInt(hourNow)) { 
        // -set attribute to an input with background color red
        newBlock.css({"background-color": "#ff6961","color": "white"});
    }else{ 
        // -set attribute to an input with background color green
        newBlock.css({"background-color": "#77dd77","color": "white"});
    };
     $(".container").append(inputGroup)

 }
};
createTimeBlocks();

function addTask(inputGroup){


}

// $("button").on("click",function(event){

//     console.log("I got clicked!")
//     var currentTask = $(this).newBlock.text();
//     console.log(currentTask);
// })
//get a text from a current timeblock
//turn into a string
//send to a local storage


// WHEN I refresh the page
// THEN the saved events persist

// 6.Set the textcontent of a newBlock
// localestorage.getItem
// JSON parse()
// $("button").on('click', (event) => {
//     var clickedBlockTask = JSON.stringify(newBlock);
//     $(this).localStorage.setItem("task", clickedBlockTask); 
     
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

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//3.Create a var hourNow that will contain current hour.
//3.1 Compare the number value of a first block in each row with a a var hourNow
//3.2 If-else statement that will assign a background color according to results of a comparison
// - done and included in a function createTimeBlocks ln 36-46


// WHEN I click into a timeblock
// THEN I can enter an event

//4.Each row in a timeblock should be made as an input form in order to easily edit info
  // - done, look into a  newBlock structure ln 28-33



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

//5. Look into 2.3: a block in the end of the row with symbol and a function to save(send to a local storage)
// $("button").this.on("click") -
//get a text from a current timeblock
//turn into a string
//send to a local storage


// WHEN I refresh the page
// THEN the saved events persist

// 6.Set the textcontent of a newBlock
// localestorage.getItem
// JSON parse()
>>>>>>> 02482f1... Update script.js
