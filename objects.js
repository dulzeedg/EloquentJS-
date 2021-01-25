// Javascript object
// Values of type object are arbitrary collection of properties

// obs on happy
// let cat = '';


// weresquirrel
// create obejct
let day1 = {

    // properties
    // each list of properties has a name followed by a colon and a value
    squirrel: false,
    events: [ "work", "touched tree", "pizza", "running" ]
};


// array of objects
let journal = [
    { 
        events: ["work", "touched tree", "pizza", "running", "televsion"], 
        squirrel: false 
    },
    {
        events: [" work", "toucehd tree", "pizza", "running", "televison"],
        squirrel: false   
    }
    // etc
]


function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

console.log(day1.squirrel);
console.log(day1.events)
console.log(day1.wolf)
day1.wolf = false
console.log(day1.wolf)