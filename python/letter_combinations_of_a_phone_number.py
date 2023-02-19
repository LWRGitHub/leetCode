"""

        Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

        A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

        d2L = { 
                '2': 'abc', 
                '3': 'def', 
                '4': 'ghi',
                '5': 'jkl',
                '6': 'mno', 
                '7': 'pqrs', 
                '8': 'tuv', 
                '9': 'wxyz'
        }

        Example 1:
                Input: digits = "23"
                Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

        Example 2:
                Input: digits = ""
                Output: []

        Example 3:
                Input: digits = "2"
                Output: ["a","b","c"]
        

        Constraints:

                0 <= digits.length <= 4
                digits[i] is a digit in the range ['2', '9'].


        Leetcode (2022) Letter Cominations of a Phone Number :https://leetcode.com/problems/letter-combinations-of-a-phone-number/     

"""

def letterCombinations(d):
        if len(d) == 0: return []
        d2L = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
                '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
        def backtrack(idx, pth, count):
            count += 1
            if len(pth) == len(d): 
                ans.append("".join(pth))
                return
            ls = d2L[d[idx]]
            for l in ls:
                pth.append(l)
                backtrack(idx+1, pth, count)
                pth.pop()
        ans=[]
        backtrack(0, [], 0)
        return ans





# print(letterCombinations("23"))# ["ad","ae","af","bd","be","bf","cd","ce","cf"]
# print(letterCombinations(""))# []
# print(letterCombinations("2"))# ["a","b","c"]

print(letterCombinations("234"))# ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]