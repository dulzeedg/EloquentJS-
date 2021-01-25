// write a a program that uses console.log to print all numbers from 1-100
// number divisible by 3 print 'Fizz' instead of number
// number divisible by 5(not 3) print 'Buzz'
// number divisible by both 3 and 5 'FizzBuzz'

// for (let number = 0; number <= 100; number++) {
//     if ( number % 3 == 0) {
//         console.log("Fizz");
//     }
//     if (number % 5 == 0) {
//         console.log("Buzz");
//     }
//     console.log(number);
// }



for (let n = 1; n<= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

// OBS
// got the 1st line right but failed to implement logic 