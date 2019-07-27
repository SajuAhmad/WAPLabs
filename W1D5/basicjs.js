/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));
console.log("Expected output of max(20,10) is 10  " + myFunctionTest(10, function () {
    return max(20, 10);
}));

console.assert(max(20, 10) === 10, "assertion condition for max function failed");

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 4  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));

console.assert(maxOfThree(55, 4, 44) === 4, "assertion condition for maxOfThree function failed");


/* check if a character is vowel or not */
function isVowel(c) {
    var char = "" + c.toLowerCase();
    if (char.charAt(0)) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
            return true;
        else
            return false;
    } else
        return false;
}

console.log("Expected output of isVowel('c') is false  " + myFunctionTest(false, function () {
    return isVowel('c');
}));
console.log("Expected output of isVowel('A') is true  " + myFunctionTest(true, function () {
    return isVowel('A');
}));

console.assert(isVowel('A') === false, "assertion condition for isVowel function failed");


/* sum array elements */
function sum(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
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
    var mul = 1;
    for (var i = 0; i < a.length; i++) {
        mul *= a[i];
    }
    return mul;
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
    return s.split('').reverse().join('');
}

console.log("Expected output of reverse('Hello World!') is '!dlroW olleH'  " + myFunctionTest("!dlroW olleH", function () {
    return reverse('Hello World!');
}));
console.log("Expected output of reverse('Hello World!') is 'dlroW olleH'  " + myFunctionTest("dlroW olleH", function () {
    return reverse('Hello World!');
}));

console.assert(reverse('Hello World!') === 'dlroW olleH', "assertion condition for reverse function failed");


/*function findLongestWord() that takes an array of words and returns the length of the longest one.*/
function findLongestWord(a) {
    var result = "";
    for (var i = 0; i < a.length; i++) {
        if (result.length < a[i].length) {
            result = a[i];
        }
    }
    return result;
}

console.log("Expected output of findLongestWord(['I', 'was', 'there!']) is 'there!'  " + myFunctionTest("there!", function () {
    return findLongestWord(['I', 'was', 'there!']);
}));
console.log("Expected output of findLongestWord(['I', 'was', 'there!']) is 'there!'  " + myFunctionTest("there", function () {
    return findLongestWord(['I', 'was', 'there!']);
}));
console.assert(findLongestWord(['I', 'was', 'there!']) !== 'there!', "assertion condition for findLongestWord function failed");

/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(a, i) {
    var result = [];
    var idx = 0;
    for (var j = 0; j < a.length; j++) {
        if (a[j].length > i) {
            result[idx] = a[j];
            idx++;
        }
    }

    return result.toString();
}

console.log("Expected output of filterLongWords(['I', 'was', 'there!']) is 'was,there!'  " + myFunctionTest("was,there!", function () {
    return filterLongWords(['I', 'was', 'there!'], 1);
}));
console.log("Expected output of filterLongWords(['They', 'were', 'there!'] is 'there!'  " + myFunctionTest("was, there!", function () {
    return filterLongWords(['They', 'were', 'there!'], 4);
}));

/*
Modify the jsfiddle on the map/filter/reduce slide as follows:
a) multiply each element by 10;
b) return array with all elements equal to 3;
c) return the product of all elements;
 */
var a = [1, 3, 5, 3, 3];
var b = a.map(function (elem, i, array) {
    return elem * 10;
});
console.log(b);
var c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c);
var d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);