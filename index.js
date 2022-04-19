window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('visual');
    const colors = [
        "rgb(98, 255, 98)",
        "rgb(248, 17, 17)",
        "rgb(216, 57, 216)",
        "rgb(245, 245, 23)",
        "rgb(236, 122, 141)",
        "rgb(46, 46, 236)"
    ];


    //lets get going with the sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener("click",function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        }); 
    });

    //Create a function that makes bubbles
    const createBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationed',function() {
            visual.removeChild(this);
        });
    };
});
