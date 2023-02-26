"""
Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.


Example 1:
    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.


Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9
 

Constraints:

    n == height.length
    1 <= n <= 2 * 10^4
    0 <= height[i] <= 10^5

LeetCode (2023) Trapping Rain Water; https://leetcode.com/problems/trapping-rain-water/
"""

def trap(height, watter=0):

    n = len(height)
    left = [0] * n
    left[0] = height[0]
    right = [0] * n
    right[n-1] = height[n-1]
    
    for i in range(n):
        left[i] = max(left[i-1], height[i])
    for i in range(n-2, -1, -1):
        right[i] = max(right[i+1], height[i])
        
    for i in range(n):
        watter += min(left[i], right[i]) - height[i]
    return watter

print(trap([0,1,0,2,1,0,1,3,2,1,2,1])) # 6
print(trap([4,2,0,3,2,5])) # 9
