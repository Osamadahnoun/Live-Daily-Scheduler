var currentDayContainer = $("#currentDay");
var currentDay = document.createElement('div');
let now = moment().format('dddd, MMMM Do YYYY')
currentDay.textContent = now;
currentDayContainer.append(currentDay);
var nine = document.querySelector('#nine');


function times() {
    if (moment().isAfter(9, 'hours')) {
        nine.classList.add('past')
    }
    
// var x = {
//     nextSlot: 60,
//     startTime: '9:00',
//     endTime: '18:00'
// };
    
// var startTime = moment(x.startTime, "HH");
// var endtime = moment(x.endTime, "HH");
// let time = [];
// while (startTime < endtime) {
//     time.push(startTime.format('hh a'));
//     startTime = startTime.add(x.nextSlot, 'minutes');
// }

// for (let i = 0; i < time.length; i++) {

// }}
// // if (moment().isBefore(time[i])) {
// //     input.classList.add('past');
// //  }
// //  else if (moment().isSame(time[i])) {
// //     input.classList.add('present');
// //  }
// //  else {
// //     input.classList.add('future');
// //  }
 
// // // console.log(times[i])
// // console.log(time[i])

// let toDo = []
// button.addEventListener('click', function() {
//     localStorage.setItem('To-Do', JSON.stringify(toDo.push(input.value)))
// })
// }
// }

// times();

}

times()