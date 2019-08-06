/* global $ */

$(function () {
    "use strict";
    let result = null;

    $("#maze").mouseleave(function () {
        if (result) {
            $(".boundary").addClass("youlose");
            $("#status").text('You lose! :[');
        }
    });

    $(".boundary").mouseover(function () {
        if (result !== null) {
            $(".boundary").addClass("youlose");
            $("#status").text('You lose! :[');
            result = false;
        }
    });

    $("#end").mouseover(function () {
        if (result === true) {
            $("#status").text('You win! :]');
        } else if (result === false) {
            $("#status").text('You lose! :[');
        }
    });

    $("#start").click(function () {
        $(".boundary").removeClass("youlose");
        $("#status").text('Click the "S" to begin.');
        result = true;
    });

});