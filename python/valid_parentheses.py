def isValid(s):
        stack = []
        for i in range(len(s)):
            if s[i] == ")":
                if not stack or "(" not in stack: return False
                if stack[-1] == "(": stack.pop()
            elif s[i] == "}":
                if not stack or "{" not in stack: return False
                if stack[-1] == "{": stack.pop()
            elif s[i] == "]":
                if not stack or "[" not in stack: return False
                if stack[-1] == "[": stack.pop()
            else:
                stack.append(s[i])
        return not stack

print(isValid("()[]{}"))