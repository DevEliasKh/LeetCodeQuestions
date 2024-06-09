// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/881/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = -1
    let arr = s.split('')
    const map = new Map();
   for (const num of s) {
      map.set(num, (map.get(num) ?? 0) + 1);
   }
    for (const [num, count] of map) {
      if (count === 1) {
          return result = s.indexOf(num)
      }
   }
    return result
};
