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


/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) =>{

    x = x.toString();
    let ans = "";
    
    for(let i=x.length-1; i>=0; i--){
        if(x[i] === '-'){
            ans = x[i] + ans
        }else{
            ans += x[i]
        }
    }

    ans = Number(ans)
    return ans < 2147483647 && ans > -2147483647? ans : 0;
};

