//leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

// TODO: negative number turn to Nan

/**
 * @param {number} x
 * @return {number}
 */
https: var reverse = function (x) {
   const max = Math.pow(2, 23) - 1;
   const min = Math.pow(-2, 23);
   if (x > max || x < min) {
      return 0;
   } else {
      return x.toString().split("").reverse().join("");
   }
};
