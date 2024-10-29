// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

var rotate = function (nums, k) {
   let temp = nums.length > k ? k : k % nums.length;
   let del = nums.splice(0, nums.length - temp);

   for (const num of del) {
      nums.push(num);
   }

   console.log(nums);

   //******************************
   // this code take too long
   //  for (let i = 0; i < k; i++){
   //      nums.unshift(nums.pop())
   //  }
};

let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 4);
