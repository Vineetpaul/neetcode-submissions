class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let table = {};

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];

            if (table[complement] !== undefined) {
                return [table[complement], i];
            }

            table[nums[i]] = i;
        }
    }

}
