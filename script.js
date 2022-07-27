$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //adds current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    var currentTime = moment().format("H");

    //pushes the element 'time' to startTime variable in "00 AM/PM" format
    x.forEach(function (time, index) {
        var startTime = [];
        startTime.push(moment().hour(time).format("h A"));
        // console.log(parseInt(startTime));
        // console.log(moment().hour());

        //New variables for new elements
        var newDiv = $("<div>");
        var newSpan = $("<span>");
        var newTextInput = $("<input>");
        var newBtn = $("<button>");

        //appending new elements to container while adding a B/S class
        $(".container").append(newDiv);
        $(".container").addClass("mb-5");

        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.attr("data-val", index);
        newDiv.append(newSpan);
        newSpan.addClass("input-group-text");
        newSpan.addClass("start-time")
        newSpan.text(startTime);
        newDiv.append(newTextInput);
        newTextInput.attr("type", "text");
        newTextInput.attr("data", "data-input" + index);
        newTextInput.addClass("form-control")
        newTextInput.attr("data", "data-text" + index);
        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary");

    });

    //click event 
    $("button").on("click", function (event) {
        event.preventDefault();

        var textInput = $(this).siblings("input").attr("data");
        var textVal = $(this).siblings("input").val();
        localStorage.setItem(textInput, textVal);
        var lsVal = localStorage.getItem(textInput);
        $(this).siblings("input").text(lsVal);
    });
    
    //updates button width while using the font-awesome icon
    $(".input-group-text").css("width", "100px");
    $("button").text("SAVE"); // update with icon from font-awesome


})
