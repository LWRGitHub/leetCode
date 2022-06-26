# Given an input string s, reverse the order of the words.

# A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

# Return a string of the words in reverse order concatenated by a single space.

# Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

# Example 1:

    # Input: s = "the sky is blue"
    # Output: "blue is sky the"

# Example 2:

    # Input: s = "  hello world  "
    # Output: "world hello"
    # Explanation: Your reversed string should not contain leading or trailing spaces.

# Example 3:

    # Input: s = "a good   example"
    # Output: "example good a"
    # Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

# Constraints:

    # 1 <= s.length <= 10^4
    # s contains English letters (upper-case and lower-case), digits, and spaces ' '.
    # There is at least one word in s.


# LeetCode (2022) Reverse Words in a String: https://leetcode.com/problems/reverse-words-in-a-string/



def reverseWords(s):
    s = s.strip().split()
    s.reverse()
    return " ".join(s)



# Test cases:

print(reverseWords("  hello world  ")) # "world hello"
print(reverseWords("a good   example")) # "example good a"
print(reverseWords("the sky is blue")) # "blue is sky the"
print(reverseWords("a")) # "a"
print(reverseWords("")) # ""
print(reverseWords("  ")) # ""
print(reverseWords("a   b")) # "b   a"
print(reverseWords("a   b   c")) # "c   b   a"
print(reverseWords("a   b   c   d")) # "d   c   b   a"
print(reverseWords("a   b   c   d   e")) # "e   d   c   b   a"
print(reverseWords("a   b   c   d   e   f")) # "f   e   d   c   b   a"