/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    var c = (a + b);
    return a + " + " + b + " = " + c;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    var count = 0
    var i;
    var none = [];
    if(endNumber < startNumber) {
    return none;
    }
    var arr = new Array((endNumber - startNumber +1));
    for (i = startNumber; i < endNumber; i++) {
        arr[count] = startNumber + count;
        count++
    }
    arr[count] = endNumber;
    return arr;



}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    var max = Math.max.apply(Math, numbers);
    var min = Math.min.apply(Math, numbers);
    var objectA = new Object();
    objectA.min = min;
    objectA.max = max;
    return objectA;
    //"min: " + min + ", max: " + max;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var fullArr = [];
    var temper = [];
    var i;
    for (i = 0; i <array.length; i++) {
        var count = 0;
        for (j = 0; j < array.length; i++) {
            if (JSON.stringify(array[i]) === JSON.stringify(array[j])) {
                count++;
            }
        }
        var newobjectA = new Object();
        var temper = array[i];
        newobjectA = count;
        fullArr[i] = newobjectA;
    }
    array = Object.assign({}, ...fullArr);
    return array;
}
