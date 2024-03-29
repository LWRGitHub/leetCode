// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

    // Input: nums1 = [1,3], nums2 = [2]
    // Output: 2.00000
    // Explanation: merged array = [1,2,3] and median is 2.


// Example 2:

    // Input: nums1 = [1,2], nums2 = [3,4]
    // Output: 2.50000
    // Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 


// Constraints:

    // nums1.length == m
    // nums2.length == n
    // 0 <= m <= 1000
    // 0 <= n <= 1000
    // 1 <= m + n <= 2000
    // -10^6 <= nums1[i], nums2[i] <= 10^6


// Leetcode (2022) Median of Two Sorted Arrays :https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/

const findMedianSortedArrays = (nums1, nums2, arr=(nums1.concat(nums2)).sort((a, b) => a-b)) =>{
    return arr.length & 1 ? arr[Math.floor(arr.length/2)] : (arr[Math.floor(arr.length/2)-1]+arr[Math.ceil(arr.length/2)])/2
};