/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.

Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 265;
const expected4 = 13;

const num5 = 0;
const expected5 = 0;


/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
        //start sum at 0
        let sum = 0
        //define strNum so that it converts the parameter's number into a string
        let strNum = num.toString();

        //iterate over earch number in the string
        for (let i = 0; i < strNum.length; i++) {
            //converting string to integers - add the parsed integers once they've been converted
            sum += parseInt(strNum[i]);
        }
        //return the sum of the integers 
        return sum
    }

console.log(sumToOneDigit(num1));
console.log("===============\n");
console.log(sumToOneDigit(num2));
console.log("===============\n");
console.log(sumToOneDigit(num3));
console.log("===============\n");
console.log(sumToOneDigit(num4));
console.log("===============\n");
console.log("===============\n");
console.log("===============\n");

/* --------------------------------------- */

//? Alt solution2 with recursion:

function sumToOneDigit2(num) {
    if (num < 10) {
        //return the num since it's a single digit
        return num;
    }
    //reset sum to 0
    let sum = 0;
    //convert the number to a string
    let strNum = num.toString();

    //iterate through the length of the string
    for (let i = 0; i < i.length; i++) {
        //converting string to integers - add the parsed integers once they've been converted
        sum += parseInt(strNum[i]);
    }
//retuen function call with parameter of "sum"
return sumToOneDigit(sum);
}

console.log(sumToOneDigit(num1));
console.log("===============\n");
console.log(sumToOneDigit(num2));
console.log("===============\n");
console.log(sumToOneDigit(num3));
console.log("===============\n");
console.log(sumToOneDigit(num4));
console.log("===============\n");
console.log(sumToOneDigit(num5));
console.log("===============\n");
console.log("===============\n");
console.log("===============\n");

/* --------------------------------------- */

//? Alt solution3 with recursion:

function sumToOneDigit3(num, i, sum) {
//define the strNum variable to convert numbers into strings
let strNum = num.toString();
    //if <10 then return num since it's 1 digit
    if (num < 10) {
        return num;
    }
    //if i == the length const num, then i == the answer
if (i == strNum.length){
    return sum
}
//return function (while iterating through the numbers with i+1, then add the sum once it's parsed and turned back into a string)
return sumToOneDigit3(num, i+1, sum += parseInt(strNum[i]))
}

console.log(sumToOneDigit3(num1,0,0));
console.log("===============\n");
console.log(sumToOneDigit3(num2,0,0));
console.log("===============\n");
console.log(sumToOneDigit3(num3,0,0));
console.log("===============\n");
console.log(sumToOneDigit3(num4,0,0));
console.log("===============\n");
