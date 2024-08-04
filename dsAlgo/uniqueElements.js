const uniqueElements = (nums = []) => {
  let k = 0;
  const length = nums.length;
  let deleteCount = 0;
  const bucket = {};
  while (k < length) {
    if (bucket[nums[k - deleteCount]]) {
      nums.splice(k - deleteCount, 1);
      deleteCount++;
    } else {
      bucket[nums[k - deleteCount]] = 1;
    }
    k++;
  }
  return nums.length;
};

console.log(uniqueElements([1, 1, 2, 2, 2, 34, 2]));
// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
