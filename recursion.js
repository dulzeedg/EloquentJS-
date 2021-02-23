// whether even or odd
// Zero is even
// One is odd
// for any other number N, its eveness is the same as N - 2

// define a recursive fucntion isEven corresponding to this descrption
// the function should accept a single parameter (a positive, whole number)
// and return a Boolean
// test it on 50 and 75. see how it behaves on -1
// why?
// fix it

function isEven (n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));