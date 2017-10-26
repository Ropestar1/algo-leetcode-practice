/* NOTE: PROMPT (easy)
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

const reverse = (x) => {
  // Reverse the integer (make it a string first and reverse it?)
    let numToString = x.toString();
    if (numToString[0] === '-') {
      numToString.splice(0,1);
      numToString.split('').reverse().join('');
      const reversed = -1 * parseInt(numToString);

      (reversed < -2,147,483,648 || reversed > 2,147,483,647) ? 0 : reversed;
    }
    else return numToString.split('').reverse().join('');
}

/* NOTE: attempted to use forEach() for the loop, but learned that the forEach method, does not stop when "return"ing output. */
