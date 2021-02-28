// Displays current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));


function updatePage() {

    // Variable equal to the current hour in military time
    var currentTime = parseInt(moment().hours());

    // Reset local storage at end of work day, 5 pm
    if (currentTime > 17) {
        localStorage.clear();
    }


};