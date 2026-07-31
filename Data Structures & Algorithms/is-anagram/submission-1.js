class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        let table = {};

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (table[char]) {
                table[char]++;
            } else {
                table[char] = 1
            }
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i]

            if (!table[char]) {
                return false
            }
            table[char]--;
        }
        return true
    }
}
