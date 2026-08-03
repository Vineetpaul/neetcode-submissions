class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
           let groups = {};

    for (let word of strs) {
        // Create a unique key by sorting the characters
        let key = word.split('').sort().join('');

        // If the key doesn't exist, create an empty array
        if (!groups[key]) {
            groups[key] = [];
        }

        // Add the original word to its group
        groups[key].push(word);
    }

    // Return only the grouped arrays
    return Object.values(groups);
    }
}
