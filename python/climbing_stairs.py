"""
    70. Climbing Stairs
    

    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

    

    Example 1:
        Input: n = 2
        Output: 2
        Explanation: There are two ways to climb to the top.
        1. 1 step + 1 step
        2. 2 steps

    Example 2:
        Input: n = 3
        Output: 3
        Explanation: There are three ways to climb to the top.
        1. 1 step + 1 step + 1 step
        2. 1 step + 2 steps
        3. 2 steps + 1 step
    

    Constraints:
        1 <= n <= 45

    LeetCode (2024) 70. Climbing Stairs: https://leetcode.com/problems/climbing-stairs

"""


# Memorization
class Solution(object):
    def climbStairs(self, n):
        return self._climbStairs(n, {0:0,1:1,2:2,3:3})
    
    def _climbStairs(self, n, memo):
        if n in memo: return memo[n]
        memo[n] = self._climbStairs(n-1, memo) + self._climbStairs(n-2,memo)
        return memo[n]
    
# Tabulation
class Solution(object):
    def climbStairs(self, n):
        if n <= 2: return n
    
        tab = [0]*n
        tab[0],tab[1] = 1,2
        for i in range(2, n): tab[i] = tab[i-1] + tab[i-2]

        return tab[-1]
    
# While loops are a tiny bit faster than four loops and naming your variable names with one letter cause it also to be A bit faster
# Best solution
class Solution(object):
    def climbStairs(self, n):
        if n <= 2: return n
    
        t = [0]*n
        t[0],t[1] = 1,2
        i = 2
        while i < n:
            t[i] = t[i-1] + t[i-2]
            i+=1
        
        return t[-1]