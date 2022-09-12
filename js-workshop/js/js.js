/**
 * file: js/js.js
 */
console.log("Js ok")

// variables: and data types
let abrahadabra = "<h2 id='header'>Ale with foam</h2>" // a string
console.log(abrahadabra)
let myNumber = 1234 // a number or integer
console.log(myNumber)
let santaExists = true // or false - booleans
console.log("Does Santaclaus exist? " + santaExists)

// Calculation, math and similar
let i = 23456
let y = 45678
console.log("The of i*y result is = " + (
    i - y
))

// The syringe: inject HTML
let theHTML = `
    <div class="orange">
        <!-- image --> 
        <img src="images/avatar-1295397__180.png" alt="Me, Harry">
        <h3 id="contactMe"> Contact Me </h3>
        <p> Harry and <span class="ginny">Ginny</span> Potter <br>
        Gryffindor 234<br>
        Mob. +45 234 456 <br>
        Email: <a href="mailto:harry@potter.uk">harry@potter.uk</a><br>
        Web: 
    </div>
`
// console.log(theHTML)

document.getElementById("text").innerHTML = theHTML

// functions
let peterson = function () {
    console.log("So this is Xmas")
    console.log("Ok, so when is lunch?")
}

peterson()
