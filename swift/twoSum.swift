/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    

    Example 1:

        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    Example 2:

        Input: nums = [3,2,4], target = 6
        Output: [1,2]

    Example 3:

        Input: nums = [3,3], target = 6
        Output: [0,1]
    

    Constraints:

        2 <= nums.length <= 10^4
        -10^9 <= nums[i] <= 10^9
        -10^9 <= target <= 10^9
        Only one valid answer exists.


    Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?


    LeetCode (2023) Two Sum: https://leetcode.com/problems/two-sum/
*/

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = [Int: Int]()
        for (i, num) in nums.enumerated() {
            if let j = dict[target - num] {
                return [j, i]
            }
            dict[num] = i
        }
        return []
    }

    // func twoSum(_ nums: [Int], _ target: Int) -> [Int] {

    //     var memo = [Int: Int]()
    //     for i in 0..<nums.count {

    //     let need = target - nums[i]
    //     if let i2 = memo[need] {
    //         return [i2, i]
    //     }

    //     memo[nums[i]] = i
    //     }
    //     return []
    // }
}


print(Solution().twoSum([2, 7, 11, 15], 9)) // [0, 1]
