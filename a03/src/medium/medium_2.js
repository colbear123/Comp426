import mpg_data from "./data/mpg_data";
import {getStatistics} from "./medium_1";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: AvgMPG(mpg_data),
    allYearStats: getYearStats(mpg_data),
    ratioHybrids: getHybridRatio(mpg_data),
};
export function getAvgMPG(mpg_data) {
    var highwayTot = 0;
    var cityTot = 0;
    var avgMPG =0;
    var i;
    for (i = 0; i < mpg_data.length; i++) {
        cityTot += mpg_data[i].city_mpg;
        highwayTot += mpg_dat[i].highway_mpg; 
    }
    var Cars = new Object();
    Cars.highway = (highwayTot/mpg_data.length);
    Cars.city = (cityTot/mpg_data.length);
    return Cars;
    }
export function getYearStats(mpg_data) {
    var arr = [];
    for (i = 0; i < mpg_data.length; i++) {
        arr[i] = mpg_data[i].year;
}
    return getStatistics(arr);
}

export function getHybridRatio(mpg_data) {
    var hybridNum = 0;
    var i;
    for (i = 0; i < mpg_data.length; i++) {
        if (mpg_data[i].hybrid === true) {
            hybridNum++;
        }
    }
    var ratio = (hybridNum / mpg_data.length)
    return ratio;

}


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: HybridLister(mpg_data),
    avgMpgByYearAndHybrid: AvgMpgByYearAndHybridLister(mpg_data),
};
export function HybridLister(mpg_data) {
    var Makies = [];
    for (i = 0; i < mpg_data.length; i++) {
        if (Makies.includes(mpg_data[i].make)) {

        } else {
            Makies[i] = mpg_data[i].make;
        }
}
        var filters = Makies.filter(function (el) {
            return el != null;
        })
}