// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
   let newDigit = BigInt(digits.join(""));
   ++newDigit;
   let stringDigit = String(newDigit);
   let digitPlusOne = [];
   for (let i = 0; i < stringDigit.length; i++) {
      digitPlusOne.push(stringDigit[i]);
   }
   return digitPlusOne;
};
