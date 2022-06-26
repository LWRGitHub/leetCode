// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

    // Input: nums = [-1,0,1,2,-1,-4]
    // Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

    // Input: nums = []
    // Output: []

// Example 3:

    // Input: nums = [0]
    // Output: []
 

// Constraints:

    // 0 <= nums.length <= 3000
    // -10^5 <= nums[i] <= 10^5


// LeetCode (2022) 3Sum: https://leetcode.com/problems/3sum/



// NOTE:

    // return 3 nums that = 0 (NO duplicet index)



// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */


const threeSum = function(nums) {

    nums.sort((a,b) => a - b);

    let res = [];

    for(let i = 0; i < nums.length; i++){
        
        if(nums[i] > 0){
            break;
        } else if(i === 0 || nums[i-1] !== nums[i]){
            sum0(nums, i, res);
        }
    }
    return res;
};

const sum0 = (nums, i, res) => {
    
    let sm = i + 1;
    let lg = nums.length - 1;
    
    while(sm < lg){
        const sum = nums[i] + nums[sm] + nums[lg];
        
        if(sum < 0){
            sm++;
        } else if(sum > 0) {
            lg--;
        } else {
            res.push([nums[i], nums[sm], nums[lg]]);
            sm++;
            lg--;
            while(nums[sm] === nums[sm-1]){
                sm++;
            }
        }
    }
};


// Test cases:

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0])) // []
console.log(threeSum([0])) // []
console.log(threeSum([0,0,0])) // [[0,0,0]]
console.log(threeSum([-1,0,1,2,-1,-4,0])) // [[-1,-1,2],[-1,0,1]]
