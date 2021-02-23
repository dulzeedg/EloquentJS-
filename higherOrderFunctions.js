// Functions that operate on other functions, either by taking them as args
// or by returning a them
// higher order functions allows us to abstract over actions, not just values
// example
// Functions that create new function
// Functions that change other functions 
// Funtions that provide new types of control flow

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

// console.log(sum(range(1, 10)));

// which one is more likely to contain bugs
// the second is solution is expressed is a vocabulary that corresponds
// to the problem being solved.
// summing a range of numbers isn't about loops and counters.
// it is abount ranges and sums
// the definitions of this vocabulary (the functions sum and ranges) will still
// involve loops, counters, and other incidental details. but because they
// are expressing simpler concepts than the program as a whole, they are easier to get right.


// Plain functions, are a good way to build abstractions. but sometimes
// they fall short.
// it is common for a program to do something a given number of times
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// we can abstract  "doing something N times" as function
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

// But what if we want to do something other than logging the numbers?
// Since "doing something" can be represented as a function and functions
// are just values, we can pass our action as a function value
function repeat(n, action) {
    for(let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

// we dont have to pass a predefined function to repeat
// Often, it is easier to create a fucntion value on the spot instead
let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// This is structured a like a loop
// it first describe the kind of loop and then provides a body
// However the function is written as function value  wrapped in () of the call to reapeat



// Functions that create new function
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// On OBS
// line 72 is a closure() ? 

// Functions that change other functions 
function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);


// Funtions that provide new types of control flow
function unless(test, then) {
    if (!test) then();
}
repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

// There is built-in array method,that provides something like a for/of loop as a higher-order function
// ["A", "B"].forEach(1 => console.log(1));