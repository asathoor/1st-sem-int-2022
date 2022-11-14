console.log("I am up and running, rgds. inClass.js")

const composer = {
    name : "Wolfgang Amadeus",
    lastName : "Mozart",
    image : "moz.jpg",
    works : [
        "Zauberflöte",
        "Piano Trio No. 1 in B-flat major (Divertimento), K. 254 (1776)",
        "Piano Trio No. 2 in G major, K. 496 (1786)",
        "Piano Trio No. 3 in B-flat major, K. 502 (1786)",
        "String Quartet No. 5 in F major, K. 158 (1772–73)"
    ]
}

// the console is for tests
console.log( composer.lastName )
console.log( composer.name )

document.getElementById("result").innerHTML = composer.lastName
result.innerHTML += "<img src='images/" + composer.image + "' alt='picture'>"

console.log( composer.works )

for (let i=0; i<composer.works.length; i++) {
    result.innerHTML +=  composer.works[i] + "<br>";
}





