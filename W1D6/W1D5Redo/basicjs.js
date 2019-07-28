/* runs test to see if expected argument is === to value returned by function2test argument */

function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

/* sum array elements */
function sum(a) {
    return a.reduce(function (prev, val){return prev + val}, 0);
}

console.log("Expected output of sum([1,2,3]) is 6  " + myFunctionTest(6, function () {
    return sum([1, 2, 3]);
}));
console.log("Expected output of sum([1,2,3]) is 7  " + myFunctionTest(7, function () {
    return sum([1, 2, 3]);
}));
console.assert(sum([1, 2, 3]) === 7, "assertion condition for sum function failed");

/* multiply array elements */
function multiply(a) {
    return a.reduce(function (prev, val){return prev * val}, 1);
}

console.log("Expected output of multiply([4,5,5]) is 100  " + myFunctionTest(100, function () {
    return multiply([4, 5, 5]);
}));
console.log("Expected output of multiply([4,5,5]) is 101  " + myFunctionTest(101, function () {
    return multiply([4, 5, 5]);
}));
console.assert(multiply([4, 5, 5]) === 101, "assertion condition for multiply function failed");


/* reverse a string */
function reverse(s) {
    return s.split("").reduce(function (prev, val){return val + prev}, '');
}

console.log("Expected output of reverse('Hello World!') is '!dlroW olleH'  " + myFunctionTest("!dlroW olleH", function () {
    return reverse('Hello World!');
}));
console.log("Expected output of reverse('Hello World!') is 'dlroW olleH'  " + myFunctionTest("dlroW olleH", function () {
    return reverse('Hello World!');
}));
console.assert(reverse('Hello World!') === 'dlroW olleH', "assertion condition for reverse function failed");

/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(a, i) {
    return (a.filter(function (word) { return word.length > i})).toString();
}

console.log("Expected output of filterLongWords(['I', 'was', 'there!']) is 'was,there!'  " + myFunctionTest("was,there!", function () {
    return filterLongWords(['I', 'was', 'there!'], 1);
}));
console.log("Expected output of filterLongWords(['They', 'were', 'there!'] is 'there!'  " + myFunctionTest("was,there!", function () {
    return filterLongWords(['They', 'were', 'there!'], 4);
}));
console.assert(filterLongWords(['They', 'were', 'there!'], 4) === "was,there!", "assertion condition for filterLongWords function failed");