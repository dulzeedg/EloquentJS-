function wrapValue (n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());

// both instances of the binding in line 5 and 6 can be accessed
// This situation is a good demonstration of the fact that local bindings
// are created anew for every call, and different calls can't trample on one another's local bindings
// This feature-- being able to reference a specific instance of a local binding in an enclosing scope-- is called CLOSURE
// A function tha references bindings from local scopes around it is called a closure
// This behaviour frees you from having to worry about lifetimes of bindings
// but also makes it possible to use function values in some creative ways

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

// function values contain both code in their body and the environment in which they are created
// When called, the function body sees the environment in which it was created,
// not the environment in which it is called.
// above, multiplier is called and creates an environment in which its factor parameter is bound to 2
// the function value it returns, which is stored in twice, remembers this environment
// so when that is called, it multiplies its argument by 2
