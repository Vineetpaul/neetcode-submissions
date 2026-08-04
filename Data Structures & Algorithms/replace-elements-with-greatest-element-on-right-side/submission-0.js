class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let temp = new Array(arr.length);

        for (let i = 0; i < arr.length; i++) {
            let greatest = -1;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > greatest) {
                    greatest = arr[j];
                }
            }

            temp[i] = greatest;
        }

        return temp;
    }
}
