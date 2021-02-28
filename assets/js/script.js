// Displays current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));


function updatePage() {

    // Variable equal to the current hour in military time
    var currentTime = parseInt(moment().hours());

    // Reset local storage at end of work day, 5 pm
    if (currentTime > 17) {
        localStorage.clear();
    }

    // Display local storage content in each hour slot, even with a page refresh
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));    

    // Update each time block with the current, past, and present class
    $(".time-block").each(function () {

        var blockHour = parseInt($(this).attr("id"));

        console.log("blockHour: " + blockHour)

        if (blockHour === currentTime) {
            $(this).addClass("present");
        }
        else if (blockHour < currentTime) {

            $(this).addClass("past");
            $(this).removeClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
    
};

updatePage();

// Save button to store entered content in local storage
$(".saveBtn").on("click", function () {

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log("time: " + time)

    localStorage.setItem(time, value);
});
