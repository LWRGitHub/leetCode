// package main

// import (
// 	"fmt"
// 	"sort"
// )

// func main() {
// 	fmt.Println(threeSum([]int{-1, 0, 1, 2, -1, -4})) // [[-1,-1,2],[-1,0,1]]
// }

// func threeSum(nums []int) []int {
// 	var res []int
// 	nums = sort.Ints(nums[:])
// 	for i, num := range nums {
// 		if num > 0 {
// 			break
// 		} else if i == 0 || num != nums[i-1] {
// 			sum(nums, i, res)
// 		}
// 	}
// 	return res
// }

// func sum(nums []int, i int, res []int) {
// 	var sm = i + 1
// 	var lg = len(nums) - 1
// 	for sm < lg {
// 		var sum = nums[i] + nums[sm] + nums[lg]
// 		if sum < 0 {
// 			sm++
// 		} else if sum > 0 {
// 			lg--
// 		} else {
// 			res = append(res, []int{nums[i], nums[sm], nums[lg]}...)
// 			sm++
// 			lg--
// 			for nums[sm] == nums[sm-1] {
// 				sm++
// 			}
// 		}
// 	}
// }
