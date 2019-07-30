window.onload = function () {
    "use strict";
    let FONTSIZE = [];
    FONTSIZE.TINY = "7pt";
    FONTSIZE.SMALL = "10pt";
    FONTSIZE.MEDIUM = "12pt";
    FONTSIZE.LARGE = "16pt";
    FONTSIZE.EXTRALARGE = "24pt";
    FONTSIZE.XXL = "32pt";

    let frames = [];
    let currentFrame = 0, turboMode, stopAmimation;

    const textarea = document.getElementById("text-area");
    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const animation = document.getElementById("animation");
    const fontsize = document.getElementById("fontsize");
    const turbo = document.getElementById("turbo");

    animation.onchange = selectAnimation;

    function selectAnimation() {
        const animationType = animation.options[animation.selectedIndex].text.toUpperCase();
        textarea.value = ANIMATIONS[animationType];
        frames = ANIMATIONS[animation.options[animation.selectedIndex].text.toUpperCase()].split("=====\n");
        currentFrame = 0;
    }

    fontsize.onchange = changeFont;

    function changeFont() {
        const fontSize = fontsize.options[fontsize.selectedIndex].value.toUpperCase();
        textarea.style.fontSize = FONTSIZE[fontSize];
    }

    start.onclick = () => {
        stopAmimation = setInterval(doAnimation, 250);
        start.disabled = true;
        animation.disabled = true;
        stop.disabled = false;
    };

    stop.onclick = () => {
        clearInterval(stopAmimation);
        clearInterval(turboMode);
        start.disabled = false;
        animation.disabled = false;
        stop.disabled = true;
        selectAnimation();
    };

    turbo.onchange = () => {
        if (turbo.checked === true)
            turboMode = setInterval(doAnimation, 50);
        else
            clearInterval(turboMode);
    };

    function doAnimation() {
        textarea.value = frames[currentFrame++];
        if (currentFrame === frames.length) {
            currentFrame = 0;
        }
    }
}
;