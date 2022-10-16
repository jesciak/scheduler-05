
var currentDate = document.querySelector('#currentDay');
var currentDay = moment();
currentDate.textContent = currentDay.format("dddd MMMM Do");

//displays current day at top of calendar

// $('#currentDay').text(moment().format("dddd MMMM Do"));

var timeBlock = $('.time-block').addClass("row");
var blockEntry = $("<p>").addClass("entry");
timeBlock.append(blockEntry);


var nowTime = parseInt(moment().format('H'));

var loadEvent = function (eventTime) {

    eventTime.forEach((element) => {
        console.log(element);
        let text = localStorage.getItem(parseInt(element.time));
        console.log(text);

        if (text) {
            element.text.val(text);
        }
    });
};
// function saveEvent(index)
// {
//     var texArea=$('#textArea' + index);
//     if (textArea.val() !==)
//     {
//         schedule[index].blockEntry =textArea.val();
//     }
// }


var getEvent = function () {
    var arr = [];
    $("textarea").each(function (index, el) {
        arr.push({
            time: $(el).attr("id"),
            text: $(el),
        });
    });
    loadEvent(arr);
   
};

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
});


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

