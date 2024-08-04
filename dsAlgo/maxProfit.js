const maxProfit = (prices = []) => {
  const length = prices.length;
  if (length >= 2) {
    let profit = 0;
    let i = 1;
    let start = 0;

    while (i < length) {
      const startValue = prices[start];
      const currentValue = prices[i];
      if (currentValue < startValue) {
        start = i;
        i++;
      } else if (currentValue === startValue) {
        i++;
      } else if (currentValue > startValue) {
        const nextValue = prices[i + 1] ?? 0;
        if (nextValue >= currentValue) {
          i++;
        } else {
          profit = profit + (currentValue - startValue);
          i++;
          start = i;
        }
      }
    }
    return profit;
  } else {
    return 0;
  }
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
