// consider this puzzle
// By starting from the no 1 and repeatedly either by adiing 5 or multiply by 3
// an infinite se of numbers can be produced
// Write a function that, given a number, tries to find a sequence of 
// such additions and multiplications that produces taht number?
// e.g the number 12 could be reached by 1st multiplying by 3 and 
// then adding 5 twice, wheras the number 15 cannot be reached at all.

// recursive solution

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        }   else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));

// obs 
// i/p 24 to the function findSolution()
// 24 is the target
// findSolution() body contains a function find() and a return value
// the return value pass the i/p 1 and "1" which are equal to find()
// if 1 == 24 return "1" is false
// else 1 > 24 return null is false
// else i/p is 1, ("1" + 5) || 3, ("1" * 3)
// o/p (((1 * 3) + 5) * 3)