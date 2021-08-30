// var to display todays date at the top of the screen
var todayDate = moment().format("dddd, MMM Do YYYY, h:mm.ss");
$("#currentDay").html(todayDate);


// saveBtn function
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // saving the enter the information to local storage 
        localStorage.setItem(time, text);
    })

    // track time 
    function trackTime() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // information for local storage
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
    $("#6pm .description").val(localStorage.getItem("6pm"));
    $("#7pm .description").val(localStorage.getItem("7pm"));
    $("#8pm .description").val(localStorage.getItem("8pm"));
    $("#9pm .description").val(localStorage.getItem("9pm"));
    $("#10pm .description").val(localStorage.getItem("10pm"));
    $("#11pm .description").val(localStorage.getItem("11pm"));
    $("#12am .description").val(localStorage.getItem("12am"));
    $("#1am .description").val(localStorage.getItem("1am"));
    $("#2am .description").val(localStorage.getItem("2am"));
    $("#3am .description").val(localStorage.getItem("3am"));

    trackTime();
})

// function for sit to refrech time for accuracy

setInterval(function () {
    $(".currentTime").html(function () {
        refresh();
    });

}, 1000);

