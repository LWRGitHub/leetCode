/*
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
*/


const trap = (height, watter=0, n=height.length, arrL=Array(n).fill(0), arrR=Array(n).fill(0)) =>{
    
    arrL[0] = height[0];
    arrR[n-1] = height[n-1];
    
    for(let i = 1;i < n; i++) arrL[i] = Math.max(height[i],arrL[i-1]);
    for(let i = n-2; i >= 0; i--) arrR[i] = Math.max(height[i],arrR[i+1]);

    for(let i = 0; i < n; i++) watter += Math.min(arrL[i], arrR[i])-height[i];

    return watter;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))// 6
console.log(trap([4,2,0,3,2,5]))// 9