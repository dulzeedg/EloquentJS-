// write a loop that makes seven calls to console.log to output the following triangle
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let triangle = 0;
// let hash = '#';
// while (triangle <= 7 && hash.length <= 7) {
//     console.log(hash);
//     hash += '#';
//     triangle++;
// }

// OBS
// solution2.1 for looping triangle is less verbosed compared to mine above
// legnth of program text 7 to 2

for (let line = "#"; line.length<8; line += "#")
    console.log(line)