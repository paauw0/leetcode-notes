/**
 * 1. 两数之和 https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const c = target - nums[i]
        const temp = nums.slice(i + 1).findIndex(k => k === c)
        const j = temp >= 0 ? i + 1 + temp : null
        if (j) {
            return [i, j]
        }
    }
};

console.log(twoSum([-12, -5, -2, -7, -11, -15], -9))
console.log(twoSum([-3,4,3,90], 0))
