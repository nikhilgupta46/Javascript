const twoSum = (nums = [], target = 0) => {
  const sortedNums = nums
    .map((num, index) => {
      return { value: num, index };
    })
    .sort((a, b) => {
      return a.value - b.value > 0 ? 1 : -1;
    });
  let i = 0;
  let j = sortedNums.length - 1;
  while (i < j) {
    const value = sortedNums[i].value + sortedNums[j].value;
    if (value === target) {
      return [sortedNums[i].index, sortedNums[j].index];
    } else if (value > target) {
      j--;
    } else {
      i++;
    }
  }
  return -1;
};

// Example 1:

//Input:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

//Input:
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));
// Output: [1,2]

// Example 3:

// Input:
const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));
//Output: [0,1]
