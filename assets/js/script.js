var currentDayContainer = $("#currentDay");
var currentDay = document.createElement('div');
let now = moment().format('dddd, MMMM Do YYYY')
currentDay.textContent = now;
currentDayContainer.append(currentDay);
var nine = document.querySelector('#nine');
var ten = document.querySelector('#ten');
var eleven = document.querySelector('#eleven');
var twelve = document.querySelector('#twelve');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var timeBlock = document.querySelector('.time-block')

function times() {

    var nineAM = moment().hour(9)
    if (moment().isAfter(nineAM)) {
        nine.classList.add('past')
    }
    else if (moment().isSame(nineAM)) {
        nine.classList.add('present')
    }
    else {
        nine.classList.add('future')
    }

    var tenAM = moment().hour(10)
    if (moment().isAfter(tenAM)) {
        ten.classList.add('past')
    }
    else if (moment().isSame(tenAM)) {
        ten.classList.add('present')
    }
    else {
        ten.classList.add('future')
    }

    var elevenAM = moment().hour(11)
    if (moment().isAfter(elevenAM)) {
        eleven.classList.add('past')
    }
    else if (moment().isSame(elevenAM)) {
        eleven.classList.add('present')
    }
    else {
        eleven.classList.add('future')
    }

    var twelvePM = moment().hour(12)
    if (moment().isAfter(twelvePM)) {
        twelve.classList.add('past')
    }
    else if (moment().isSame(twelvePM)) {
        twelve.classList.add('present')
    }
    else {
        twelve.classList.add('future')
    }

    var onePM = moment().hour(13)
    if (moment().isAfter(onePM)) {
        one.classList.add('past')
    }
    else if (moment().isSame(onePM)) {
        one.classList.add('present')
    }
    else {
        one.classList.add('future')
    }

    var twoPM = moment().hour(14)
    if (moment().isAfter(twoPM)) {
        two.classList.add('past')
    }
    else if (moment().isSame(twoPM)) {
        two.classList.add('present')
    }
    else {
        two.classList.add('future')
    }

    var threePM = moment().hour(15)
    if (moment().isAfter(threePM)) {
        three.classList.add('past')
    }
    else if (moment().isSame(threePM)) {
        three.classList.add('present')
    }
    else {
        three.classList.add('future')
    }

    var fourPM = moment().hour(16)
    if (moment().isAfter(fourPM)) {
        four.classList.add('past')
    }
    else if (moment().isSame(fourPM)) {
        four.classList.add('present')
    }
    else {
        four.classList.add('future')
    }

    var fivePM = moment().hour(17)
    if (moment().isAfter(fivePM)) {
        five.classList.add('past')
    }
    else if (moment().isSame(fivePM)) {
        five.classList.add('present')
    }
    else {
        five.classList.add('future')
    }

    // for (let i = 9; i <= 17 ; i++) {
    //     var time = moment().hour(i)
    //     if (moment().isAfter(time)) {
    //         timeBlock.classList.add('past')
    //     }
    //     else if (moment().isSame(time)) {
    //         timeBlock.classList.add('present')
    //     }
    //     else {
    //         timeBlock.classList.add('future')
    //     }
    
    //     console.log(i)
    // }
}

function saveData() {
    
}

times();