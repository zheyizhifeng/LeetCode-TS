// @algorithm @lc id=3 lang=typescript
// @title longest-substring-without-repeating-characters
// @test("abcabcbb")=3
// @test("bbbbb")=1
// @test("pwwkew")=3
function lengthOfLongestSubstring(s: string): number {
  let l = 0;
  let r = 0;
  let max = 0;
  const window = new Map();
  for (let i = 0; i < s.length; i++) {
    if (window.has(s[i])) {
      const last = window.get(s[i]);
      for (let j = l; j <= last; j++) {
        window.delete(s[j])
      }
      l = last + 1;
    }
    r++;
    window.set(s[i], i);
    if (r - l > max) {
      max = r - l
    }
  }
  return max;
}
