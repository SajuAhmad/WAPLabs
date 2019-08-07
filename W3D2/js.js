$(function () {
    "use strict";

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function generateColor() {
        return '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    }

    // grow the size of circles
    function growCircle() {
        // read the values of input fields
        let size = $("#growAmount").val();

        // set default value of growth size
        let growSize = parseInt(size ? size : 10);
        $(".circle").each(function (idx, e) {
            let element = $(e);
            let curWidth = parseInt(element.css("width")) + growSize;
            let curHeight = parseInt(element.css("height")) + growSize;
            element
                .css("width", curWidth + "px")
                .css("height", curHeight + "px");
        });
    }

    function addCircle() {
        // read the values of input fields
        let wdth = $("#width").val();
        let growRate = $("#growRate").val();
        let numOfCircles = $("#numOfCircle").val();

        // set default value of width, growth rate and number of circles
        let width = parseInt(wdth ? wdth : 50);
        let rate = parseInt(growRate ? growRate : 250);
        let circles = parseInt( numOfCircles? numOfCircles : 5);

        // generate circles
        for (let i = 0; i < circles; i++) {
            $("#bubbleField").append($("<div>")
                .addClass("circle")
                .css("width", width + "px")
                .css("height", width + "px")
                .css("background-color", generateColor)
                .css("left", getRandomInt(1366) + "px"));
        }
        // grow the size of circles
        let grow = setInterval(growCircle, rate);
    }

    function removeCircle() {
        $(this).remove(); //jshint ignore:line
    }

    $("#settingBtn").on("click", addCircle);
    $("#bubbleField").on("click", ".circle", removeCircle);
});