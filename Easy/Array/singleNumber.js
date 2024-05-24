// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/

// TODO not solved yet!

var singleNumber = function (nums) {
   nums.sort((a, b) => a - b);
   let newNums = deleteDuplicatedNum(nums, 0);
   return newNums[0];
};

function deleteDuplicatedNum(nums, i) {
   let newNums = [];
   if (nums.length > 1) {
      if (nums[i] == nums[i + 1]) {
         newNums = nums.filter((index) => index != nums[i]);
         console.log(i, newNums);
         deleteDuplicatedNum(newNums, i);
      } else {
         return (newNums = [nums[0]]);
      }
   } else {
      console.log(nums[0]);
      return (newNums = [nums[0]]);
   }
   console.log("newnums is ", newNums);
   return newNums;
}
