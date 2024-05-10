var containsDuplicate = function (nums) {
   let duplicate = false;
   let newNums = [...new Set(nums)];
   duplicate = nums.join() == newNums.join() ? false : true;
   return duplicate;

   //***********************************
   //* Take Too Long
   // if (!duplicate) {
   //    findDeletedIndex(nums.length - 1);
   // }
   // console.log(duplicate);
   // return duplicate;

   // function findDeletedIndex(i) {
   //    if (i >= 0) {
   //       let deleted = nums[i];
   //       nums.pop();
   //       if (nums.indexOf(deleted) == -1) {
   //          findDeletedIndex(i - 1);
   //       } else {
   //          duplicate = true;
   //       }
   //    }
   // }
};

var arr = [1, 2, 3, 1];

containsDuplicate(arr);
