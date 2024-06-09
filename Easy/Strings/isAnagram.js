// https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/882/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let result = null
    const sortedS = s.split('').sort()
    const sortedT = t.split('').sort()
    if (sortedS.length != sortedT.length){
         result = false;
    } else {
        for (let i = 0; i < sortedS.length; i++){
            if (sortedS[i] != sortedT[i]){
                result = false
            }
        }
    }
    return result
};
