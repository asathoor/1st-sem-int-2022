// global vars: querySelector
let r = document.querySelector('#result')

var remember = [
    "Beer", 
    "Heintz Tomato Ketchup", 
    "Spaghetti", 
    "Veggies"
]

// how the array works

// console
console.log(remember)
console.log(remember[0])

// += will add to thatever is there
r.innerHTML += remember[2] 


/** Array method samples */

// Join
r.innerHTML = remember.join("<br>") // will "print" a list with breaks

// Pop: remove last element that was "popped" out
remember.pop()
console.log(remember)

// Push: will add a new element to the end of an array
remember.push("Parmesan Cheese")
console.log(remember)

// Shift: remove the first element
remember.shift()
console.log(remember)

// Unshift: add element at the beginning, and "unshifts" older elements
remember.unshift("Onions")
console.log(remember)

// Change elements (just change the "variable")
remember[2] = "Lasagne"
console.log(remember)

// Merge arrays
let oopsForgot = ["A book" ,"Candy", "It's our Wedding Day: Gift"]
let mergeLists = oopsForgot.concat(remember)
console.log(mergeLists)

// toString: will convert an array to a comma separated list
r.innerHTML += mergeLists.toString()

// NB: comma separated list to array
let myString = "Uno,Duo,Tres"
let toArray = myString.split()
console.log(toArray)

// btw: an array has a length property
console.log(remember.length)

/** LOOPS */
/** With a loop we can create cool stuff on the fly. */
for (let i = 0; i<100; i++){
    console.log( i )
}

// now print out one of your arrays with a loop and format with some html
for (let z = 0; z < remember.length; z++){
    coolLop.innerHTML += "<li>" + remember[z] + "</li>"; // this line MUST end with a ";"
}

// now print out one of your arrays in a div with an id

/** LOOP: SELECT ALL ELEMENTS WITH THE SAME CLASS */

// classes: queryselector all
const nodeList = document.querySelectorAll(".example");

for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
}
