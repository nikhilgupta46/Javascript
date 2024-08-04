const jumpGame = (nums = []) => {
  let gas = 0;
  let i = 0;
  while (i < nums.length) {
    if (gas < 0) {
      return false;
    } else if (nums[i] > gas) {
      gas = nums[i];
    }
    i++;
    gas--;
  }
  return true;
};
console.log(jumpGame([2, 3, 1, 1, 4]));
console.log(jumpGame([3, 2, 1, 0, 4]));

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4,3]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
