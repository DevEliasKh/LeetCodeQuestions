// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/

// TODO: solve it!

/**
 * @param {string} s
 * @return {number}
 */

const s = "   -042";

function myAtoi(s) {
   const newS = s.trim();
   let resultString = "";
   let isDigit = true;
   while (isDigit) {
      for (let i = 0; i < newS.length; i++) {
         if (resultString.length == 0) {
         } else {
         }
         if (checkDigit(newS[i])) {
            resultString = resultString + newS[i];
         } else {
            isDigit = false;
         }
      }
      return +resultString;
   }
}

function checkDigit(s) {
   console.log(s);
   let acceptableChar = [
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
   if (acceptableChar.indexOf(s) != -1) {
      return true;
   }
   return false;
}

function checkFirstChar(s) {
   let acceptableChar = ["-", "+"];
   if (acceptableChar.indexOf(s) != -1) {
      return true;
   }
}

console.log(myAtoi(s));
