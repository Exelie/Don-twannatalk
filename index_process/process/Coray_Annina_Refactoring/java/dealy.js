var play = true;

function play_stop() {

    if (play == false) {
        play = true;
        document.getElementById("song").play();
        console.log("test");
    } else {
        play = false;
        document.getElementById("song").pause();
        console.log("test2");
    }
    return
};