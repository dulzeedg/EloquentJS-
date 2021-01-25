// write a program that creates a string that represent an 8*8 grid
// using newline character to seperate line
// at each position of the grid there is either a space or a "#"



// let grid = 0;
// let pound = '#';
// for () {

// }

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);

// OBS
// two bindings for number and string respectively 
// also a for loop for both codes
// failed to implement logic
// learn
// the 1st for loop(y) runs 
// when y = 0, x = 0 and runs 8times
// then control is passed to board binding addind new line 
// control is in y now after being incremented 
// control goes back to x and lopps runs 8 times again
// add newling
// increment
// by the time the outer loop is 8, x would have ran 64 times
// binding the values to board
// console.log the board