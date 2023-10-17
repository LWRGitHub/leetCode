/*

   Reverse Integer


   Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



   Example 1:

   Input: x = 123
   Output: 321
   Example 2:

   Input: x = -123
   Output: -321
   Example 3:

   Input: x = 120
   Output: 21


   Constraints:

   -231 <= x <= 231 - 1


   Leetcode (2023) Reverse Integer: https://leetcode.com/problems/reverse-integer/


*/

package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println(reverse(123))         // 321
	fmt.Println(reverse(-123))        // -321
	fmt.Println(reverse(120))         // 21
	fmt.Println(reverse(1534236469))  // 0
	fmt.Println(reverse(-2147483648)) // 0
}

// func reverse(x int) int {
// 	var res int
// 	for x != 0 {
// 		res = res*10 + x%10
// 		x /= 10
// 	}
// 	if res < -1<<31 || res > 1<<31-1 {
// 		return 0
// 	}
// 	return res
// }

func reverse(x int) int {
	// x to string
	xStr := strconv.Itoa(x)
	var ans string
	// reverse string
	for i := len(xStr) - 1; i >= 0; i-- {
		if xStr[i] == '-' {
			ans = string(xStr[i]) + ans
		} else {
			ans += string(xStr[i])
		}
	}
	// string to int
	ansInt, _ := strconv.Atoi(ans)

	// check if ansInt is within the range of 32-bit signed integer
	if ansInt > 2147483647 || ansInt < -2147483647 {
		return 0
	}

	return ansInt
}
