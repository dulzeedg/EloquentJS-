function square (x) {
    return x * x;
}
console.log(square(4, true, "hedgehog"));

// the code runs without any problem
// it ignores the extra arguments and computes the square of the first one
// if you pass too many args, the extra ones are ignored
// The upside is that this behaviour can be used to allow a function to be called with different numbers of args

function minus (a, b) {
    if (b == undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// writing an = operator after a parameter, followed by an expression,
// the value of that expression will replace the arguments when it is not given

function power (base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(4));
console.log(power(2, 6));

// line 28
// the 2nd parameter is not giving so t=it uses the value of the expression
// hence 4 to power of 2 = 16
// whereas the parameter is giving in line 29 and the function behaves as expected
