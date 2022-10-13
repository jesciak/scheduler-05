$(document).ready(function () {

    //displays current day at top of calendar
    $('#currentDay').text(moment().format("dddd MMMM Do"));



    var nowtTime = moment().format('H'));


    $('.time-block').each(function () {
        var timeBlock = parseInt(s(this).attr('id').split('-')[1]);
        var
    
        if (timeBlock < nowTime) {
            $(this).addClass("past");
        }
        else if (timeBlock === nowTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
        
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });


whatHour();


//     var displayEl = document.getElementById  ('displayElement');
//     displayEl.innerHTML= nowtTime;
    
//     function timeColor(){
//         var currentTime = 
//         var
//     }

// function addInput ()
// var textInput = $(`block1,block2, bloc)
//creating new HTML elements to the DOM 

// const timeBlock =$('.time-block').addClass('row');
// const textInput =$('<p>').addClass('input');

// timeBlock.append(textInput);


// var block1 =
// var block2 =
// var block3=
// var block4=
// var block5=
// var block6=
// var block7=
// var block8=
// var block9=
