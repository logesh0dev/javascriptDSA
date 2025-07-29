function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let maxLength = 0;
  let left = 0;
  for (let r = 0; (r < s.length); r++) {
    
    while (charSet.has(s[r])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[r]);
    maxLength = Math.max(maxLength, r - left + 1);
  }
  return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
