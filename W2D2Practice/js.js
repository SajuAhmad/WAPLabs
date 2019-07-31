(function () {
        "use strict";

        function myFunctionTest(expected, function2test) {
            if (expected === function2test()) {
                return "TEST SUCCEEDED";
            } else {
                return "TEST FAILED.  Expected " + expected + " found " + function2test();
            }
        }

        console.log("Problem 1:");

        // reverse and return as new array
        function reverseArray(array) {
            let resultArr = [], idx = -1;
            let arrLen = array.length;
            for (let i = arrLen - 1; i >= 0; i--) {
                resultArr[++idx] = array[i];
            }
            return resultArr;
        }

        console.log(reverseArray(["A", "B", "C"]));
        console.log("Expected output of reverseArray([\"A\", \"B\", \"C\"]) is [\"C\",\"B\",\"A\"]  " + myFunctionTest("C,B,A", function () {
            return reverseArray(["A", "B", "C"]).toString();
        }));

        let arrayValue = [1, 2, 3, 4, 5];

        // reverse the original array and return it
        function reverseArrayInPlace(arr) {
            let len = arr.length, last = len;
            for (let i = 0; i <= len / 2; i++) {
                if (last !== len / 2) {
                    let temp = arr[i];
                    arr[i] = arr[--last];
                    arr[last] = temp;
                } else {
                    break;
                }
            }
        }

        reverseArrayInPlace(arrayValue);
        console.log(arrayValue);
        console.log("Expected output of arrayValue = [1, 2, 3, 4, 5] is [5, 4, 3, 2, 1]  " + myFunctionTest("5,4,3,2,1", function () {
            return arrayValue.toString();
        }));
        console.log("\n");

        console.log("Problem 2:");

        // add element to the beginning of the list
        function prepend(element, list) {
            return {value: element, rest: list};
        }

        // convert array to list
        function arrayToList(arr) {
            let list = null, len = arr.length - 1;
            for (let i = len; i >= 0; i--) {
                list = prepend(arr[i], list);
            }
            return list;
        }

        console.log(arrayToList([10, 20]));

        // convert list to array
        function listToArray(list) {
            let array = [], idx = 0;
            while (list) {
                array[idx++] = list.value;
                list = list.rest;
            }
            return array;
        }

        console.log(listToArray(arrayToList([10, 20, 30])));
        console.log("Expected output of listToArray(arrayToList([10, 20, 30])) is [10, 20, 30]  " + myFunctionTest("10,20,30", function () {
            return listToArray(arrayToList([10, 20, 30])).toString();
        }));

        // return the value at nth position
        function nth(list, position) {
            let pos = 0;
            while (list) {
                let val = list.value;
                list = list.rest;
                if (pos === position) {
                    return val;
                }
                pos++;
            }
            return undefined;
        }

        console.log(nth(arrayToList([10, 20, 30]), 1));
        console.log("Expected output of nth(arrayToList([10, 20, 30]), 1) is 20  " + myFunctionTest(20, function () {
            return nth(arrayToList([10, 20, 30]), 1);
        }));
        console.log("Expected output of nth(arrayToList([10, 20, 30]), 1) is 30  " + myFunctionTest(30, function () {
            return nth(arrayToList([10, 20, 30]), 1);
        }));

        // return the value of nth element recursively
        function recursiveNth(list, position, index) {
            if (list === null) {
                return undefined;
            }
            if (index === position) {
                return list.value;
            }
            return recursiveNth(list.rest, position, index + 1);
        }

        console.log(recursiveNth(arrayToList([10, 20, 30]), 1, 0));
        console.log("Expected output of recursiveNth(arrayToList([10, 20, 30]), 1, 0) is 20  " + myFunctionTest(20, function () {
            return recursiveNth(arrayToList([10, 20, 30]), 1, 0);
        }));
        console.log("Expected output of recursiveNth(arrayToList([10, 20, 30]), 1, 0) is 30  " + myFunctionTest(30, function () {
            return recursiveNth(arrayToList([10, 20, 30]), 1, 0);
        }));

        console.log("\n");
        console.log("Problem 3:");

        let obj = {here: {is: "an"}, object: 2};

        // compare two objects
        function deepEqual(obj1, obj2) {
            if (obj1 !== null && obj2 !== null) {
                if (typeof obj1 === typeof obj2) {
                    const obj1Keys = Object.keys(obj1);
                    const obj2Keys = Object.keys(obj2);

                    // check if both objects has same number of keys
                    if (obj1Keys.length !== obj2Keys.length) {
                        return false;
                    }

                    // compare keys and values of both object
                    for (let val of obj1Keys) {
                        if (typeof obj1[val] !== "object") {
                            if (obj1[val] !== obj2[val]) {
                                return false;
                            }
                        } else if (typeof obj1[val] === "object") {
                            if (deepEqual(obj1[val], obj2[val]) === false) {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }

            return true;
        }

        console.log(deepEqual(obj, obj));
        console.log("Expected output of deepEqual(obj, obj), 1, 0) is ture  " + myFunctionTest(true, function () {
            return deepEqual(obj, obj);
        }));
        console.log(deepEqual(obj, {here: 1, object: 2}));
        console.log("Expected output of deepEqual(obj, {here: 1, object: 2}) is false  " + myFunctionTest(false, function () {
            return deepEqual(obj, {here: 1, object: 2});
        }));
        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
        console.log("Expected output of deepEqual(obj, {here: {is: \"an\"}, object: 2}) is ture  " + myFunctionTest(true, function () {
            return deepEqual(obj, {here: {is: "an"}, object: 2});
        }));
    }

)();