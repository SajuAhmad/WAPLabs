window.onload = main;

function main() {
    document.getElementById("DecorationButton").onclick = biggerDecoration;
}

function biggerDecoration() {
    document.getElementById("textarea").style.fontSize = "24pt";
}

function popup2() {
    alert("h!")
}