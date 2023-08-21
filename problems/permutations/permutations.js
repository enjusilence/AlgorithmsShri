// https://leetcode.com/problems/permutations/

export function permutations(n) {
    const result = [];
    const nums = Array.from({length: n + 1}, (_, i) => i).slice(1);

    recursiveIteration([], nums)

    function recursiveIteration(currPerm, nums) {
        if (currPerm.length === n) {
            result.push(currPerm);
        } else {
            for (let i = 0; i < nums.length; i++) {
                const nextNums = [...nums];
                const [nextNum] = nextNums.splice(i, 1);
                recursiveIteration([...currPerm, nextNum], nextNums);
            }
        }
    }

    return result;
}
