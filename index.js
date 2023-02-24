function getAudioPath(value) {
    var audioPath = "";

    switch (value) {
        case "w":
            audioPath = "sounds/tom-1.mp3";
            break;
        case "a":
            audioPath = "sounds/tom-2.mp3";
            break;
        case "s":
            audioPath = "sounds/tom-3.mp3";
            break;
        case "d":
            audioPath = "sounds/tom-4.mp3";
            break;
        case "j":
            audioPath = "sounds/snare.mp3";
            break;
        case "k":
            audioPath = "sounds/kick-bass.mp3";
            break;
        case "l":
            audioPath = "sounds/crash.mp3";
            break;
        default:
            break;
    }

    return audioPath;
}

function buttonClicked() {

    
    let audio = new Audio(getAudioPath(this.textContent));
    audio.play();

}

function keyPressed(evt) {

    let audio = new Audio(getAudioPath(evt.key));
    audio.play();

}

function setButtonsEvent() {
    let elements = document.querySelectorAll(".drum-item");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", buttonClicked);
    }
}

setButtonsEvent();
document.addEventListener("keydown", keyPressed);