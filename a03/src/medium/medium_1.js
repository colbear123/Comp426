import {variance} from "./data/stats_helpers";


/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
var count = 0;
for (var i = 0; i < array.length; i++) {
    count += array[i];
}
    return count;
}


/**
 * Calculates the mean of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
   let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    var median;
    if (array.length === 0) {
        median = 0;
        array.sort((a, b) => a-b)
    } else if (array.length % 2 != 0) {
        median = (array[Math.floor(array.length/2)]);
    } else if (array.length % 2 === 0) {
        median = ((array[(array.length/2)-1] + (array[array.length/2]))/2);
    }
    return median;
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    var length1=array.length;
    var sum1 = getSum(array);
    var min1 = Math.min.apply(Math,array);
    var max1 = Math.min.apply(Math,array)
    var median1 = getMedian(array);
    var mean1 = (sum1 - length1);
    var variance1 = variance(array, mean1)
    var std1 = Math.sqrt(variance1);
    var newObjectA = new Object();

    newObjectA.length = length1;
    newObjectA.sum = sum1;
    newObjectA.mean = mean1;
    newObjectA.median = median1;
    newObjectA.min = min1;
    newObjectA.max = max1;
    newObjectA.variance = variance1;
    newObjectA.standard_deviation = std1;
    return newObjectA;
}