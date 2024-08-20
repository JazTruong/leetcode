// https://leetcode.com/problems/running-sum-of-1d-array/description/
// Difficulty: Easy
// Tag: Array, Prefix Sum

/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.


Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6 */

// Solution 1
// Time: O(n)
// Space: O(1)

/* function runningSum(nums) {
  // declare sum with 0
  let sum = 0;
  // use for loop to add each element in array
  for(let i = 0; i < nums.length; i++) {
    // add each element with the sum amount
    nums[i] = nums[i] + sum;
    sum = nums[i];
  }
  return nums;
}
let nums = [1,2,3,4]
console.log(runningSum(nums)); */

// Solution 2 - use map()
function runningSum(nums) {
  let sum = 0;
  return nums.map(num => sum += num);
}
let nums = [1,1,1,1,1]
console.log(runningSum(nums));
