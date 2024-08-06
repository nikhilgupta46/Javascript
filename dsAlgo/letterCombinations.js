const letterCombinations = (digits = "") => {
  if (digits.length) {
    const map = {
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    };

    const splittedDigits = digits.split("");
    const result = [];
    if (splittedDigits.length > 1) {
      const digitMap = map[splittedDigits[0]];
      const innerResult = letterCombinations(splittedDigits.slice(1).join(""));
      digitMap.forEach((character) => {
        innerResult.forEach((innerCharacter) => {
          result.push(`${character}${innerCharacter}`);
        });
      });
      return result;
    } else {
      return map[splittedDigits[0]];
    }
  } else {
    return [];
  }
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("25642"));

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
