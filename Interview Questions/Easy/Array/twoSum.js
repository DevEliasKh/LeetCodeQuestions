// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/546/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
   let result = [];
   for (let i = 0; i < nums.length; i++) {
      const x = nums[i];
      const y = target - x;
      if (nums.length == 2) {
         return [0, 1];
      } else if (nums.indexOf(y) != -1 && nums.indexOf(y) != i) {
         result.push(i);
         result.push(nums.indexOf(y));
         return result;
      }
   }
};
