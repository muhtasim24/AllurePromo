const startBtn = document.getElementById('startBtn');
const static1 = document.getElementById('static1');
const anim1 = document.getElementById('anim1');
const anim1Video = document.getElementById('anim1Video');
const holdText = document.getElementById('holdText');
const anim2 = document.getElementById("anim2");
const anim2Video = document.getElementById("anim2Video");


startBtn.addEventListener("click", () => {
    // hide start btn and static background
    startBtn.style.display = "none";
    static1.style.display = "none";

    // play animation 1
    anim1.style.display = "block";
    anim1Video.play();
})

anim1Video.addEventListener('ended', () => {
    holdText.style.display = "block";

    // holding animation
    // test
    let holding = false;

    const startHold = () => {
        if (!holding) {
            holding = true;
            holdText.style.display = "none";
            anim2.style.display = "block";
            anim2Video.play();
        }
    }

    const stopHold = () => {
        if (holding) {
            holding = false;
            holdText.style.display = "block";
    
            // Reverse the video
            anim2Video.pause();
            anim2Video.currentTime = 0;
        }
    }

        // start anim2 when holding
    document.addEventListener("touchstart", startHold);
    document.addEventListener('touchend', stopHold);

    document.addEventListener("mousedown", startHold);
    document.addEventListener('mouseup', stopHold);
})