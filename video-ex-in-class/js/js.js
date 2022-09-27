/**
 * file: js/js.js
 * purpose: video control by JavaScript
 */
console.log("Hi from js/js.js")

// change the vid size
myVideo.width = Math.floor(Math.random() * 1080) + 100;

// set the controls for the heart of the sun
document.getElementById("myVideo").controls = true;

// add a button that will do our will
vidPlay.addEventListener('click', function () { // a function may fire off more commands ;-)
    myVideo.play()
    myVideo.width = 777
})

// the button for play pause
xxxPlayPs.addEventListener('click', playPause)

// the ON / OFF trick
function playPause() {
    // conditions
    if (myVideo.paused) {
        myVideo.play();
        myVideo.controls = false;
    } else {
        myVideo.pause();
        myVideo.controls = true;
    }
}
