$(function () {
    "use strict";

    let width = parseInt($("#width").val() ? $("#width").val() : 50);
    console.log(width);
    let amount = parseInt($("#growAmount").val() ? $("#growAmount").val() : 5);
    console.log(amount);
    let rate = parseInt($("#growRate").val() ? $("#growRate").val() : 10);
    console.log(rate);

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function addCircle() {
        //let pos = getRandomInt();
        //console.log(pos);
        $("#bubbleField").append($("<div>")
            .addClass("circle")
            .css("left", getRandomInt(1366) + "px"));
    }

    function createCircle() {
        for (let i = 0; i < amount; i++) {
            addCircle();
        }
    }

    $("#settingBtn").on("click", createCircle);
});
