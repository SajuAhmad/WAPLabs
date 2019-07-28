window.onload = function() {
    "use strict";

    const decorationButton = document.getElementById("DecorationButton");
    const checkbox = document.getElementById("bling");
    const textarea = document.getElementById("textarea");
    const latinButton = document.getElementById("igpay");
    const malkovichButton = document.getElementById("malkovich");

    decorationButton.onclick = increaseFontSize;
    checkbox.onchange = boldText;
    latinButton.onclick = convertText;
    malkovichButton.onclick = malkovich;

    // bold text check box
    function boldText() {
        if (checkbox.checked === true) {
            textarea.style.fontWeight = "bold";
            textarea.style.color = "green";
            textarea.style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            textarea.style.fontWeight = "normal";
            textarea.style.color = "black";
            textarea.style.textDecoration = "none";
        }
    }

    // text decoration button
    function biggerDecoration() {
        var style = window.getComputedStyle(textarea, null).getPropertyValue('font-size');
        var fontSize = parseInt(style);
        textarea.style.fontSize = (fontSize + 2) + "pt";
    }

    function increaseFontSize() {
        setInterval(biggerDecoration, 500);
    }
    // pig latin button
    function pigLatin() {
        let str = document.getElementById("textarea").value;
        let strArr = str.split(/[\n, ]+/);
        const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let vowelIndex = 0;
        let result = "";
        for (let word of strArr) {
            if (vowels.includes(word[0])) {
                result += word + "way" + " ";
            } else {
                for (let char of word) {
                    if (vowels.includes(char)) {
                        vowelIndex = word.indexOf(char);
                        break;
                    }
                }
                result += word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay" + " ";
            }
        }
        return result;
    }

    function convertText() {
        document.getElementById("textarea").value = pigLatin();
    }

    // malkovich button
    function checkWordLenght() {
        let str = document.getElementById("textarea").value;
        let strArr = str.split(/[\n, ]+/);
        let result = "";
        for (let word of strArr) {
            if (word.length >= 5) {
                result += "Malkovich" + " ";
            } else {
                result += word + " ";
            }
        }
    return result;
    }
    
    function malkovich() {
        document.getElementById("textarea").value = checkWordLenght();
    }
};

