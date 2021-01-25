// write a program that prints two numbers
// the numbers of cows and chickens on a farm
// with the words Cows and Chicken after them and zeros padded before both numbers
// so that they are always three  digits long

// 007 Cows
// 011 Chickens

// function of two args
function printFarmInventoryOne(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length <  3 ) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    
    let ChickenString = String(chickens);
    while (ChickenString.length < 3 ) {
        ChickenString = "0" + ChickenString;
    }
    console.log(`${ChickenString} Chickens`);
}

printFarmInventoryOne(7, 11);


// extend the software to also print pigs
// instead of adding four lines of code one more time
// there has to be a better way

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventoryTwo(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventoryTwo(7, 11, 3);

// function name on line 31 is a little awkward
// it conflates 3 things into a single function
// - printing
// - zero-padding 
// - adding label
// using a single concept

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventoryThree(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventoryThree(7, 16, 3);