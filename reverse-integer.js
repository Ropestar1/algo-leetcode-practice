/* NOTE: PROMPT (easy)
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

const reverse = (x) => {
  // Reverse the integer (make it a string first and reverse it?)
  let numToArray = x.toString().split('');
  // console.log(numToArray);
  if (numToArray[0] === '-') {
    numToArray.splice(0,1);
    const revString = numToArray.reverse().join('');
    const revNumber = -1 * parseInt(revString);
    ((revNumber < -2147483648) || (revNumber > 2147483647)) ? console.log(0) : console.log(revNumber);
  }
  else {
    const revString = numToArray.reverse().join('');
    const revNumber = parseInt(revString);
    ((revNumber < -2147483648) || (revNumber > 2147483647)) ? console.log(0) : console.log(revNumber);
  }
}

// reverse(2147483648);

/* NOTE: tests fine in my Terminal, but went put into Leetcode it syntax errors. */
