var removeDuplicates = function (nums) {
   for (let i = 0; i < nums.length; i++) {
      nextEqual(nums, i);
   }

   console.log(nums);
   return nums.length;
};

function nextEqual(nums, i = 0) {
   if (nums[i] == nums[i + 1]) {
      nums = nums.filter((j) => j != nums[i]);
      nextEqual(nums, i);
   } else {
      return;
   }
}
