const combinationSum = (num = [], target = 0) => {
  const result = [];

  const backktrack = (idx = 0, comb = [], total = 0) => {
    if (total === target) {
      result.push([...comb]);
      return;
    }

    if (total > target || idx >= num.length) {
      return;
    }

    comb.push(num[idx]);
    backktrack(idx, comb, total + num[idx]);
    comb.pop();
    backktrack(idx + 1, comb, total);
  };
  backktrack(0, [], 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
