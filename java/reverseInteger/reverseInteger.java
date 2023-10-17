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


class Solution {

    public static void main(String[] args) {
        System.out.println(new Solution().reverse(123)); // 321
        System.out.println(new Solution().reverse(-123)); // -321
        System.out.println(new Solution().reverse(120)); // 21
        System.out.println(new Solution().reverse(1534236469)); // 0
        System.out.println(new Solution().reverse(-2147483648)); // 0
    }

    // public int reverse(int x) {
    //     int rev = 0;
    //     while (x != 0) {
    //         int pop = x % 10; // get the last digit
    //         x /= 10; // remove the last digit
    //         if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) return 0; // check for overflow
    //         if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) return 0; // check for underflow
    //         rev = rev * 10 + pop; // add the last digit to the reversed number
    //     }
    //     return rev;
    // }

    public int reverse(int x) {
        String s = Integer.toString(x);
        String ans = ""; // reversed string

        for( int i = s.length() - 1; i >= 0; i-- ) {
            if( s.charAt(i) == '-' ) {
                ans = "-" + ans;
            } else {
                ans += s.charAt(i);
            }
        }

        try {
            return Integer.parseInt(ans);
        } catch (NumberFormatException e) {
            return 0;
        }
    }
}



