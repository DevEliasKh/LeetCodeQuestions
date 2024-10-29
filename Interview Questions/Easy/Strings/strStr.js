//leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
//  TODO: fix it
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
https: var strStr = function (haystack, needle) {
   let pOne = 0;
   let pTwo = 0;
   let result = -1;
   while (pTwo < haystack.length) {
      if (haystack.pTwo == needle.pOne) {
         ++pOne;
         ++pTwo;
         // recurive fn
      } else {
         pOne = 0;
      }
   }
};

function fn(pOne, pTwo) {}

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

// TODO: solve it

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
   const haystackArray = haystack.split("");
   const needleArray = needle.split("");

   // let result = null;
   // let tempArr = [];
   // for (let i = 0; i < haystackArray.length; i++) {
   //    if (tempArr.length != needleArray.length) {
   //       for (let j = 0; j < needleArray.length; j++) {
   //          console.log(haystackArray[i] == needleArray[j]);
   //          if (haystackArray[i] == needleArray[j]) {
   //             tempArr.push(haystackArray[i]);
   //             break;
   //          } else {
   //             continue;
   //          }
   //       }
   //       console.log(tempArr);
   //    } else {
   //       return haystackArray.indexOf(tempArr[0]);
   //    }
   // }
   const result = checkSameIndex(haystackArray, needleArray);

   return result;
};

// strStr("sadbutsad", "sad");

console.log("result", strStr("sabutsad", "sad"));

function checkSameIndex(arr1, arr2, i = 0, j = 0) {
   let firstIndex = null;

   if (arr1[i] && arr2[j]) {
      if (arr1[i] == arr2[j]) {
         console.log(arr1[i], arr2[j]);
         firstIndex = j;
         checkSameIndex(arr1, arr2, i + 1, j + 1);
      } else {
         console.log(arr1[i], arr2[j]);
         firstIndex = null;
         checkSameIndex(arr1, arr2, i + 1, 0);
      }
   }

   return firstIndex;
}
