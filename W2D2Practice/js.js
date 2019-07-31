(function () {
        "use strict";

        console.log("Problem 1:");

        function reverseArray(array) {
            let resultArr = [], idx = -1;
            let arrLen = array.length;
            for (let i = arrLen - 1; i >= 0; i--) {
                resultArr[++idx] = array[i];
            }
            return resultArr;
        }

        console.log(reverseArray(["A", "B", "C"]));

        let arrayValue = [1, 2, 3, 4, 5];

        function reverseArrayInPlace(arr) {
            let len = arr.length, last = len;
            for (let i = 0; i <= len / 2; i++) {
                let temp = arr[i];
                if (last !== len / 2) {
                    arr[i] = arr[--last];
                    arr[last] = temp;
                } else {
                    break;
                }
            }
        }

        reverseArrayInPlace(arrayValue);
        console.log(arrayValue);
        console.log("\n");

        console.log("Problem 2:");

        function prepend(element, list) {
            return {value: element, rest: list};
        }

        function arrayToList(arr) {
            let list = null, len = arr.length - 1;
            for (let i = len; i >= 0; i--) {
                list = prepend(arr[i], list);
            }
            return list;
        }

        console.log(arrayToList([10, 20]));

        function listToArray(list) {
            let array = [], idx = 0;
            while (list) {
                array[idx++] = list.value;
                list = list.rest;
            }
            return array;
        }

        console.log(listToArray(arrayToList([10, 20, 30])));

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
            return "undefined";
        }

        console.log(nth(arrayToList([10, 20, 30]), 1));

        function recursiveNth(list, position, index) {
            if (list === null) {
                return "undefined";
            }
            if (index === position) {
                return list.value;
            }
            return recursiveNth(list.rest, position, index + 1);
        }

        console.log(recursiveNth(arrayToList([10, 20, 30]), 1, 0));

        console.log("\n");
        console.log("Problem 3:");

        let obj = {here: {is: "an"}, object: 2};

        function deepEqual(obj1, obj2) {
            if (obj1 !== null && obj2 !== null) {
                if (typeof obj1 === typeof obj2) {
                    const obj1Keys = Object.keys(obj1);
                    const obj2Keys = Object.keys(obj2);
                    if (obj1Keys.length !== obj2Keys.length) {
                        return false;
                    }

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
        console.log(deepEqual(obj, {here: 1, object: 2}));
        console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    }

)();