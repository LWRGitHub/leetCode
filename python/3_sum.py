# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

 

# Example 1:

    # Input: nums = [-1,0,1,2,-1,-4]
    # Output: [[-1,-1,2],[-1,0,1]]

# Example 2:

    # Input: nums = []
    # Output: []

# Example 3:

    # Input: nums = [0]
    # Output: []
 

# Constraints:

    # 0 <= nums.length <= 3000
    # -10^5 <= nums[i] <= 10^5


# LeetCode (2022) 3Sum: https://leetcode.com/problems/3sum/



# NOTE:

    # return 3 nums that = 0 (NO duplicet index)



def threeSum(nums):

    nums.sort()
    
    res = []

    for i in range(len(nums)):

        if nums[i] > 0:
            break
        elif i == 0 or nums[i-1] != nums[i]:
            sum0(nums, i, res)

    return res


def sum0(nums, i, res):

    sm = i + 1
    lg = len(nums) - 1

    while sm < lg:
        sum = nums[i] + nums[sm] + nums[lg]

        if sum < 0:
            sm+= 1
        elif sum > 0:
            lg-= 1
        else:
            res.append([nums[i], nums[sm], nums[lg]])
            sm+= 1
            lg-= 1
            while(sm < len(nums) and nums[sm] == nums[sm-1]):
                sm+= 1




# Test Cases:

print(threeSum([-1,0,1,2,-1,-4])) # [[-1,-1,2],[-1,0,1]]
print(threeSum([0])) # []
print(threeSum([0])) # []
print(threeSum([0,0,0])) # [[0,0,0]]
print(threeSum([-1,0,1,2,-1,-4,0])) # [[-1,-1,2],[-1,0,1]]