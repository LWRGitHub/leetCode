/*

    Coin Change

    You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

    Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

    You may assume that you have an infinite number of each kind of coin.

    

    Example 1:

    Input: coins = [1,2,5], amount = 11
    Output: 3
    Explanation: 11 = 5 + 5 + 1
    Example 2:

    Input: coins = [2], amount = 3
    Output: -1
    Example 3:

    Input: coins = [1], amount = 0
    Output: 0
    

    Constraints:

    1 <= coins.length <= 12
    1 <= coins[i] <= 2^31 - 1
    0 <= amount <= 10^4

    LeetCode (2023) Coin Change: https://leetcode.com/problems/coin-change/description/

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const arr = Array.from({length: amount+1}, ()=> -1)
    arr[0] = 0;
    coins.sort((a,b)=>a-b)
  
    for(const coin of coins){
      for(let i=0; i<amount+1; i++){
        if(i >= coin){
          const i2 = i - coin
          let pos = arr[i2] + 1 > 0? arr[i2] + 1 : -1
          if(pos > -1 && arr[i] > -1){
            arr[i] = Math.min(arr[i], pos)
          }else{
            arr[i] = arr[i]>-1 ? arr[i] : pos
          }
          
        }
      }
    }
  
    return arr[amount];
  };