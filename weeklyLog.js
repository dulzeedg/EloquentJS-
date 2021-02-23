// logging my activities
// time efficiency

// Keep it simple stupid

let JOURNAL = [
    
    {
        senbonZakura : false,
        "senbonZakuraKageyoshi": false,
        "read": false,
        "writeProgram": false,
        "chores": false,
        "activities": [""]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": false,
        "writeProgram": false,
        "chores": true,
        "activities": ["washed cloths","cooked", "sweep", "Niggitarian"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["mop", "sweep", "cook", "Niggitarian"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": false,
        "writeProgram": true,
        "chores": true,
        "activities": ["mop", "sweep", "Niggitarian"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["moped", "sweep", "strectched"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["sweep, mop, washed plates", "N"]
    },
    {
        "senbonZakura": true,
        "senbonZakuraKageyoshi": false,
        "read": true,
        "writeProgram": false,
        "chores": true,
        "activities": ["mop", "washed plates","sweep"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": true,
        "writeProgram": false,
        "chores": true,
        "activities": ["mop", "washed plates","sweep"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": true,
        "writeProgram": false,
        "chores": true,
        "activities": ["washed plates","sweep"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyoshi": false,
        "read": false,
        "writeProgram": false,
        "chores": false,
        "activities": ["Niggitarian"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyosi": false,
        "read": false,
        "writeProgram": false,
        "chores": false,
        "activities": ["Niggitarian"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyosi": false,
        "read": false,
        "writeProgram": false,
        "chores": false,
        "activities": ["Niggitarian"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyosi": false,
        "read": false,
        "writeProgram": false,
        "chores": false,
        "activities": ["Niggitarian"]
    },
    {
        "senbonZakura": true,
        "senbonZakuraKageyosi": false,
        "read": false,
        "writeProgram": false,
        "chores": false,
        "activities": ["Niggitarian"]
    },
    {
        "senbonZakura": true,
        "senbonZakuraKageyosi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["Niggitarian", "sweep", "mop", "wash"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyosi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["Niggitarian", "sweep", "mop", "wash"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyosi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["Niggitarian", "sweep", "mop"]
    },
    {
        "senbonZakura": false,
        "senbonZakuraKageyosi": false,
        "read": true,
        "writeProgram": true,
        "chores": true,
        "activities": ["Niggitarian", "sweep", "mop"]
    },
]; 

function filter (array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// console.log(filter(JOURNAL, journal => journal.read));

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}
let read = JOURNAL.filter( s => s.read);
console.log(map(read, s => s.writeProgram));