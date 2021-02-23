// Function definition
// function declaration
// Arrow function

// Define f to hold a function value
const f = function (a) {
    console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
    return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;

// A function can have multiple parameters or no parameters at all
const makeNoise = function () {
    console.log("Empty Barrel");
};
makeNoise();

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));

// Some functions produce a value and some dont
// makeNoise is called for its side effect
// Functions can be roughly divided into those that are called for their 
// side effects and 
// those that are called for their return value
// Though it is definitely also possible to both have side effects and a return value
// A pure function is a specific kind of value-producing function that not only
// has no side effects but also doesn't rely on effects from other code-- for example
// it doesn't read global bindings whose value might change.