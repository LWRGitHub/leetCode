// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// 	Input: nums = [2,7,11,15], target = 9
// 	Output: [0,1]
// 	Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// 	Input: nums = [3,2,4], target = 6
// 	Output: [1,2]

// Example 3:
// 	Input: nums = [3,3], target = 6
// 	Output: [0,1]

// Constraints:
// 	2 <= nums.length <= 10^4
// 	-10^9 <= nums[i] <= 10^9
// 	-10^9 <= target <= 10^9
// 	Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?

// LeetCode (2022) Two Sum: https://leetcode.com/problems/two-sum/

package main

import "fmt"

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))         // [1, 0]
	fmt.Println(twoSum([]int{3, 2, 4}, 6))              // [2, 1]
	fmt.Println(twoSum([]int{3, 3}, 6))                 // [1, 0]
	fmt.Println(twoSum([]int{-1, 0}, -1))               // [1, 0]
	fmt.Println(twoSum([]int{-1, 0, 1, 2, -1, -4}, -5)) // [5, 4]
	fmt.Println(twoSum([]int{-1, 0, 1, 2, -1, -4}, -5)) // [5, 4]
}

func twoSum(nums []int, target int) []int {
	memo := make(map[int]int)
	for i, num := range nums {
		if val, is := memo[target-num]; is {
			return []int{i, val}
		}
		memo[num] = i
	}
	return []int{}
}

// func twoSum(nums []int, target int) []int {

//     memo := make(map[int]int)
//     for i :=0; i<len(nums); i++{

//       need := target - nums[i]
//       if i2, is := memo[need]; is {
//         return []int{i2, i}
//       }

//       memo[nums[i]] = i
//     }
//     return []int{}
// }
