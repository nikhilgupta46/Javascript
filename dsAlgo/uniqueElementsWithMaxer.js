const uniqueElementsWithMaxer = (nums = [], max = 1) => {
  let k = 0;
  const length = nums.length;
  let deleteCount = 0;
  const bucket = {};
  while (k < length) {
    const value = bucket[nums[k - deleteCount]];
    if (value) {
      if (value >= max) {
        nums.splice(k - deleteCount, 1);
        deleteCount++;
      } else {
        bucket[nums[k - deleteCount]] = value + 1;
      }
    } else {
      bucket[nums[k - deleteCount]] = 1;
    }
    k++;
  }
  return nums.length;
};

console.log(uniqueElementsWithMaxer([1, 1, 1, 1, 2, 2, 2, 34, 2], 2));

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
