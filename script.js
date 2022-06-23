// Below just for testing if script is connecting to HTML, borrowed idea from ChrisCN
// alert("Is this website working ?")

// get all of the buttons 
const allbuttons = document.querySelector(".allButtons");

// all the sounds
const boomSound = document.getElementById("boomSound");
const clapSound = document.getElementById("clapSound");
const hiHatSound = document.getElementById("hiHatSound");
const kickSound = document.getElementById("kickSound");
const openHatSound = document.getElementById("openHatSound");
const rideSound = document.getElementById("rideSound");
const snareSound = document.getElementById("snareSound");
const tinkSound = document.getElementById("tinkSound");
const tomSound = document.getElementById("tomSound");

// Listen to EITHER click or keypress --> found this way on stackoverflow (https://stackoverflow.com/questions/51791167/combining-mouse-click-and-enter-key-press-in-the-same-event-listener)
["click", "keypress"].forEach(ev => {
    allbuttons.addEventListener(ev, function (e) {
        if (ev == "click") {
            // console.log(e.target.textContent.split('\n')[0]);    // for testing Only
            soundOnButtClick(e.target.textContent.split('\n')[0]);
        }
        else if (ev == "keypress") {
            // console.log(e.key);                                  // for testing Only
            soundOnKeyPress(e.key);
        }
    });
});


// switch cases for button presses
function soundOnButtClick(buttonName) {
    /**
     * @desc : this function will play the appropriate sound when the assosciate button is clicked
     * @arg : [1] buttonName (type:str) the assosciated name of the button clicked 
     * @returns : void
     */
    switch (buttonName) {

        case "boom":
            boomSound.play();
            break;

        case "clap":
            clapSound.play();
            break;

        case "hihat":
            hiHatSound.play();
            break;

        case "kick":
            kickSound.play();
            break;

        case "openHat":
            openHatSound.play();
            break;

        case "ride":
            rideSound.play();
            break;

        case "snare":
            snareSound.play();
            break;

        case "tink":
            tinkSound.play();
            break;

        case "tom":
            tomSound.play();
            break;

        default:
            alert('Unsupported buttons is clicked');
            break;
    }

}

// switch cases for key presses
function soundOnKeyPress(key) {
    /**
     * @desc : this function will play the appropriate sound when the assosciate key is pressed
     * @arg : [1] key (type:str) the assosciated name of the key pressed
     * @returns : void
     */
    switch (key) {

        case "w":
            boomSound.play();
            break;

        case "a":
            clapSound.play();
            break;

        case "s":
            hiHatSound.play();
            break;

        case "d":
            kickSound.play();
            break;

        case "q":
            openHatSound.play();
            break;

        case "e":
            rideSound.play();
            break;

        case "z":
            snareSound.play();
            break;

        case "x":
            tinkSound.play();
            break;

        case "c":
            tomSound.play();
            break;

        default:
            alert('Unsupported key pressed');
            break;
    }
}