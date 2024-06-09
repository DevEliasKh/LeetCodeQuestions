//leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

// TODO: negative number turn to Nan

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
   let result = 0
   const max = Math.pow(2, 31) - 1;
   const min = Math.pow(-2, 31);
   if (x > max || x < min) {
      return 0;
   } else {
       if(x > 0 ){
      result =  x.toString().split("").reverse().join("");
       } else {
           x = x*-1
                 result = -(x.toString().split("").reverse().join(""));
       }
   }
    
    if (result > max || result < min) {
        return 0
    } else {
        return result
    }
};
