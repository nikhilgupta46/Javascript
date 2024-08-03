const mergeSorted = (nums1 = [], nums2 = [], m = 0, n = 0) => {
  if (m) {
    if (n) {
      let i = 0;
      let j = 0;
      while (i < m && j < n) {
        if (nums2[j] < nums1[i + j]) {
          nums1.splice(i + j, 0, nums2[j]);
          nums1.pop();
          j++;
        } else {
          i++;
        }
      }

      if (i >= m && j < n) {
        nums1.splice(i + j, n - j, ...nums2.slice(j, n));
      }
    } else {
      return nums1;
    }
  } else {
    nums1.splice(0, n, ...nums2);
  }
  return nums1;
};

// Example 1:

// Input:

(() => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  console.log(mergeSorted(nums1, nums2, m, n));
})();
// Output: [1,2,2,3,5,6]

// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input:
(() => {
  const nums1 = [1];
  const m = 1;
  const nums2 = [];
  const n = 0;
  console.log(mergeSorted(nums1, nums2, m, n));
})();

// Output: [1]

// Example 3:

// Input:
(() => {
  const nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;
  console.log(mergeSorted(nums1, nums2, m, n));
})();
// Output: [1]
