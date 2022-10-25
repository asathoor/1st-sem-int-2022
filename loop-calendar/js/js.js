/**
 * file: js/js.js
 * purpose: create a calendar with reservations via loops
 */

// UNDERSTAND LISTS AND THE "FOR LOOP"

// months of the year
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

// display one month
console.log("Just one month here: " + months[0])
// how can we log december?

// loop out all of the months
console.log("Test: loop out the months of a year")

for (let i = 0; i < 11; i++) {
    console.log(months[i])
}

// write html to cal
for (let n = 0; n < months.length; n++) {
    // calendar.innerHTML += "<p>" + n + "</p>"
    // calendar.innerHTML += months[n] + "<br>"
}

// warm up: return table rows with a loop
function createRow(myText, myText2) {
    return `
        <tr>
            <td> ${myText} </td> 
    <td> ${myText2} </td>
        </tr>
    `
}
// test
// console.log(createRow('First entry', 'Second entry'))

// add rows to the test table
// for (let z = 0; z < 10; z++) {
//    testTable.innerHTML += createRow('Lorem ipsum', 'Vir prudens')
// }

// now create a function that will return a month
function createMonth(days) { // Headline

    for (let z = 1; z <= days; z++) {
        calendar.innerHTML += `<div class='calDay' onclick="aboutThisDay()"> ${z} </div>`
    }
}

// open a window
function aboutThisDay() {
    return window.open('message.html', 'msgWin', 'width=300,height=400')
}

createMonth(30)
