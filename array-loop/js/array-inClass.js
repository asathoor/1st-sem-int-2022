/** file: arrays */
console.log("All systems are running. Code: 234879.8")

// a playlist
let myList = [
    "Mamma I'm coming home. (Ozzy)",
    "Black Sabbath. (Black Sabbath)",
    "Whiskey in the Jar. (The Dubliners)",
    "Walk on the Wild Side. (Lou Reed)"
]

// what's in the list
console.log(myList)
console.log(myList[2])
console.log(myList[6])

// methods, properties
console.log("The length of my list is: " + myList.length)

// write to html element
// document.getElementById("result").innerHTML = "<p>" + myList[0] + "</p>"

// methods: JOIN
result.innerHTML = myList.join("<br> ")

// change an element
myList[1] = "Every day in every way I get better and better"
result.innerHTML = myList.join("<br> ")

myList.push("Imagine. (John Lennon)")
myList.pop()
myList.pop()
result.innerHTML = myList.join("<br> ")