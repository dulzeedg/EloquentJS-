// One area where Higher-order functions shine is data processing
// Data set about scripts
// writing systems such as Latin, Cyrillic, or Arabic
// Unicode = assigns a number to virtually every character you would ever need
// Contains 140 diffrerent scripts
// 81 are still in use today
// 59 are historic
// The data set Object array SCRIPTS
// the unicode ranges assigned to it, the direction in which it is written
// the approximate origin time
// wether it is still in use and a link for more info
// the direction "ltr" left to rigth "rtl" right to left (ARABIC AND HEBREW)
// "ttb" (MONGOLIAN writing)
// The ranges property contains an array of Unicode character ranges, each of which 
// is a two-element array containing a lower bound and an upper bound. 
// Any character codes within these ranges are assigned to the script. 
// The lower bound is inclusive (code 994 is a Coptic character), and the upper bound is non-inclusive (code 1008 isn’t).

const SCRIPTS = require("./05_higher_order/05_higher_order/code/scripts");

// Filtering Arrays
// To find the scripts in the data set that are still in use
// the function filters out the elements in an array that dont pass a test

function filter (array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));

// the function uses the argument test, a function value
// to fill a "gap" in the computation
// Rather than deletiing elements from the existing array
// builds up a new array with only element that pass the test
// this function is pure. it does not modify the array it is given
// like forEach, Filter is a standard array method



// to get an array of names
// the Map method transform an array by applying a function to all its elements
// and building a new array from the returned values
// the new array has the same lenght as the input array
// but its contents would have been mapped to a new form by the function

function map (array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));

// Like forEach and filter, map is a standard array method



// Computing a single value from arrays
// finding the script with most characters
// 

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1,2,3,4], (a, b) => a + b, 0));
console.log([1,2,3,4].reduce((a,b) => a + b));



function charaterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return charaterCount(a) < charaterCount(b) ? b : a;
}));

// ON OBS from line 70 - 91
// Review
// function declaration called reduce, characterCount
//


