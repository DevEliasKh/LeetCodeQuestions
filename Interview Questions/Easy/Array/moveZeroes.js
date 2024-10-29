// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
   for (num of nums) {
      if (num == 0) {
         nums.splice(nums.indexOf(num), 1);
         nums.push(0);
      }
   }
};
