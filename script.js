//displays current day at top of calendar
var currentDate = document.querySelector('#currentDay');
var currentDay = moment();
currentDate.textContent = currentDay.format("dddd MMMM Do");




// creation of blocks for standard business hours
var timeBlock = $('.time-block').addClass("row");
var blockEntry = $("<p>").addClass("entry");
timeBlock.append(blockEntry);


var nowTime = parseInt(moment().format('H'));

// events remain on page and in local storage after refresh
var loadEvent = function (eventTime) {

    eventTime.forEach((element) => {
        let text = localStorage.getItem(parseInt(element.time));
        console.log(text);

        if (text) {
            element.text.val(text);
        }
    });
};

var getEvent = function () {
    var arr = [];
    $("textarea").each(function (index, el) {
        arr.push({
            time: $(el).attr("id"),
            text: $(el),
            
        });
    });
    loadEvent(arr);
    console.log(arr);

};
// sets the color of the text area based on the current time
$("textarea").each(function () {
    const color = $(this);
    const id = parseInt(color.attr("id"));

    if (id < nowTime) {
        $(this).addClass("past");
    }

    if (id === nowTime) {
        $(this).addClass("present");
    }
    if (id > nowTime) {
        $(this).addClass("future");
    }
    console.log(id);

});

// event handler when the save button is clicked
$('button.saveBtn').click(function (event, loadEvent) {
    event.preventDefault();

    var clickEl = $(this).siblings('textarea');

    var time = clickEl.attr('id');
    console.log(time);

    var text = clickEl.val().trim();

    if (time && text !== '') {
        localStorage.setItem(time, text);
        return alert("Event saved to local storage!")
    }
    else {
        alert("No event saved!")
    }

    loadEvent();
});

getEvent();

