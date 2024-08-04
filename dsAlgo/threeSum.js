const threeSum = (nums = []) => {
  if (nums.length <= 2) {
    return [];
  } else if (nums.length === 3) {
    return nums.reduce((acc, item) => acc + item, 0) === 0 ? [nums] : [];
  } else {
    const length = nums.length;
    const result = [];
    const sortedNums = nums.sort((a, b) => {
      if (b < 0 && a < 0) {
        if (Math.abs(b) < Math.abs(a)) {
          return -1;
        }
      }
      if (b < 0) {
        return 1;
      }
      if (a < 0) {
        return -1;
      }
      if (b > a) {
        return -1;
      }
    });
    console.log(sortedNums);
    let k = 0;
    while (k < length - 2) {
      const firstPivot = sortedNums.shift();

      let i = 0;
      let j = sortedNums.length - 1;
      while (i < j) {
        const secondElement = sortedNums[i];
        const thirdElement = sortedNums[j];
        const value = firstPivot + secondElement + thirdElement;

        if (value === 0) {
          let alreadyPresent = false;

          result.forEach((res) => {
            if (
              res[0] === firstPivot &&
              res[1] === secondElement &&
              res[2] === thirdElement
            ) {
              alreadyPresent = true;
            }
          });
          if (!alreadyPresent) {
            result.push([firstPivot, secondElement, thirdElement]);
          }

          i++;
          j--;
        } else if (value > 0) {
          j--;
        } else {
          i++;
        }
      }
      k++;
    }
    return result;
  }
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
