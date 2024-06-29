// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

/**
 * @param {string} s
 * @return {number}
 */

var myAtoi = function (s) {
   const newS = s.trim();
   let acceptableChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
   let firstAcceptableChar = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "-",
      "+",
   ];
   let resultString = "";
   const INT_MAX = 2147483647;
   const INT_MIN = -2147483648;

   for (let i = 0; i < newS.length; i++) {
      if (resultString.length == 0) {
         if (checkDigit(newS[i], firstAcceptableChar)) {
            resultString = resultString + newS[i];
         } else {
            break;
         }
      } else {
         if (checkDigit(newS[i], acceptableChar)) {
            resultString = resultString + newS[i];
         } else {
            break;
         }
      }
   }
   if (resultString < INT_MIN) {
      return INT_MIN;
   } else if (resultString > INT_MAX) {
      return INT_MAX;
   } else if (Number(resultString) != Number(resultString)) {
      return 0;
   } else {
      return Number(resultString);
   }
};

function checkDigit(s, arr) {
   if (arr.indexOf(s) != -1) {
      return true;
   }
   return false;
}
