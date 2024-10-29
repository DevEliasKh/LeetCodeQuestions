// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
   let newS = removeNonAlphanumeric(s).toLowerCase();
   if (newS.length == 0) {
      return true;
   }

   for (let i = 0; i < newS.length; i++) {
      let pOne = i;
      let pTwo = newS.length - i - 1;
      if (newS[pOne] != newS[pTwo]) {
         return false;
      }
   }
   return true;
};

function removeNonAlphanumeric(inputString) {
   return inputString.replace(/[^a-zA-Z0-9]/g, "");
}
