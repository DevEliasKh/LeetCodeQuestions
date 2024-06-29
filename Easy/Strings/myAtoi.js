// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

// TODO: solve it!

/**
 * @param {string} s
 * @return {number}
 */

const s = "   -14v2";

function myAtoi(s) {
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
   let isDigit = true;
   while (isDigit) {
      for (let i = 0; i < newS.length; i++) {
         if (resultString.length == 0) {
            if (checkDigit(newS[i], firstAcceptableChar)) {
               resultString = resultString + newS[i];
            } else {
               return (isDigit = false);
            }
         } else {
            if (checkDigit(newS[i], acceptableChar)) {
               resultString = resultString + newS[i];
            } else {
               return (isDigit = false);
            }
         }
      }
      return resultString;
   }
   return +resultString;
}

function checkDigit(s, arr) {
   if (arr.indexOf(s) != -1) {
      return true;
   }
   return false;
}

console.log(myAtoi(s));
