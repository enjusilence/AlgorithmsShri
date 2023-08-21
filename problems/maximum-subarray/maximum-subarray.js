// https://leetcode.com/problems/maximum-subarray/

export function maximumSubarray(arr) {
  let currMax = arr[0];
  let currSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    currMax = Math.max(currMax, currSum);
  }

  return currMax;
  
}
