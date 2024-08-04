const removeOccurences = (nums = [], value) => {
  let k = 0;
  const length = nums.length;
  let non = 0;
  while (k < length) {
    if (nums[k + non] === value) {
      nums.splice(k + non, 1);
    } else {
      k++;
    }
  }
  return nums.length;
};

console.log(removeOccurences([3, 2, 2, 3], 3));
console.log(removeOccurences([0, 1, 2, 2, 3, 0, 4, 2], 2));
