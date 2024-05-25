// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
//* Thanks to Chase

function singleNumber(nums) {
   const set = new Set();
   for (const num of nums) {
      if (set.has(num)) {
         set.delete(num);
      } else {
         set.add(num);
      }
   }
   return [...set][0];
}

function singleNumber(nums) {
   const map = new Map();
   for (const num of nums) {
      map.set(num, (map.get(num) ?? 0) + 1);
   }
   for (const [num, count] of map) {
      if (count === 1) return num;
   }
}
