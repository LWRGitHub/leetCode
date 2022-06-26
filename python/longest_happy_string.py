# A string s is called happy if it satisfies the following conditions:

    # s only contains the letters 'a', 'b', and 'c'.
    # s does not contain any of "aaa", "bbb", or "ccc" as a substring.
    # s contains at most a occurrences of the letter 'a'.
    # s contains at most b occurrences of the letter 'b'.
    # s contains at most c occurrences of the letter 'c'.

# Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

# A substring is a contiguous sequence of characters within a string.

 

# Example 1:

    # Input: a = 1, b = 1, c = 7
    # Output: "ccaccbcc"
    # Explanation: "ccbccacc" would also be a correct answer.

# Example 2:

    # Input: a = 7, b = 1, c = 0
    # Output: "aabaa"
    # Explanation: It is the only correct answer in this case.
 

# Constraints:

    # 0 <= a, b, c <= 100
    # a + b + c > 0


# LeetCode (2022) Longest Happy String: https://leetcode.com/problems/longest-happy-string/



def longestDiverseString(a, b, c):

    ans = []
    total = a + b + c
    ltrs = [['a', a], ['b', b], ['c', c]]

    while len(ans) < total:

        lenAns = len(ans)

        ltrs.sort(key = lambda row: row[1], reverse=True)

        ltr = ltrs[1] if ans != [] and lenAns > 1 and ans[lenAns-1] == ans[lenAns-2] and ans[lenAns-1] == ltrs[0][0] else ltrs[0]

        if ltr[1] == 0: break

        ans.append(ltr[0])
        ltr[1]-=1

    return "".join(ans)


# Test Cases:

print(longestDiverseString(1, 1, 7)) # "ccaccbcc"
print(longestDiverseString(7, 1, 0)) # "aabaa"
print(longestDiverseString(2, 1, 7)) # "ccaccaccbc"
print(longestDiverseString(3, 1, 7)) # "ccaccaccacb"

