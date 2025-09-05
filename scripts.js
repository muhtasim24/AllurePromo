const startBtn = document.getElementById('startBtn');
const static1 = document.getElementById('static1');
const anim1 = document.getElementById('anim1');
const anim1Video = document.getElementById('anim1Video');
const holdText = document.getElementById('holdText');
const anim2 = document.getElementById("anim2");
const anim2Video = document.getElementById("anim2Video");
const anim3 = document.getElementById("anim3");
const anim3Video = document.getElementById("anim3Video");
const anim4 = document.getElementById("anim4");
const anim4Video = document.getElementById("anim4Video");
const static2 = document.getElementById('static2');
const music = document.getElementById('background-music');
const spraySound = document.getElementById('spray');
const americanText = document.getElementById('americanText');


startBtn.addEventListener("click", () => {
    // hide start btn and static background
    startBtn.style.display = "none";
    americanText.style.display = "none";
    static1.style.display = "none";
    music.play();
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
            spraySound.play();
        }
    }

    const stopHold = () => {
        if (holding) {
            holding = false;
            holdText.style.display = "block";
            spraySound.pause();
            spraySound.currentTime = 0;
    
            // Reverse the video
            if (!anim2Video.ended) {
                anim2Video.pause();
                anim2Video.currentTime = 0;
            }
        }
    }

        // start anim2 when holding
    document.addEventListener("touchstart", startHold);
    document.addEventListener('touchend', stopHold);

    document.addEventListener("mousedown", startHold);
    document.addEventListener('mouseup', stopHold);

    anim2Video.addEventListener("ended", () => {
        spraySound.pause();
        document.removeEventListener("touchstart", startHold);
        document.removeEventListener('touchend', stopHold);

        document.removeEventListener("mousedown", startHold);
        document.removeEventListener('mouseup', stopHold);
        anim2.style.display = "none";
        holdText.style.display = "none";

        anim3.style.display = "block";
        anim3Video.play();

        anim3Video.addEventListener('ended', () => {
            // wait 1 second (1000ms) before moving on
            setTimeout(() => {
                // hide anim3
                anim3.style.display = "none";

                // show anim4
                anim4.style.display = "block";
                anim4Video.play();
            }, 1000); // 1000ms = 1 second
        })
    });
})