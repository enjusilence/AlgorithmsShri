// https://leetcode.com/problems/valid-parentheses/

export function isValid(str) {
  const pairs = {
    ')' : '(',
    '}' : '{',
    ']' : '[',
  }
  const stack = [];

  for (let i = 0; i < str.length; i++) {

    const char = str[i];
    if (!pairs[char]) {
      stack.push(char);
    } else if (pairs[char] !== stack.pop()) {
      return false;
    }
  }

  return true;
}
