const combinations = (n = 0, k = 0) => {
  const result = [];
  const comb = [];
  const backtrack = (nu) => {
    if (comb.length === k) {
      result.push([...comb]);
      return;
    }
    for (let i = nu; i < n + 1; i++) {
      comb.push(i);
      backtrack(i + 1);
      comb.pop();
    }
  };
  backtrack(1);
  return result;
};

console.log(combinations(4, 2));
console.log(combinations(6, 3));
console.log(combinations(1, 1));
