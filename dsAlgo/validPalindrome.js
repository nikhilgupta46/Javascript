const validPalindrome = (s = "") => {
  if (s.length) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      const currentFirst = s[i];
      const currentSecond = s[j];
      const isNonCharFirst = !/[a-zA-Z0-9]/.test(currentFirst);
      const isNonCharSecond = !/[a-zA-Z0-9]/.test(currentSecond);
      if (isNonCharFirst && isNonCharSecond) {
        i++;
        j--;
      } else if (isNonCharFirst) {
        i++;
      } else if (isNonCharSecond) {
        j--;
      } else {
        if (currentFirst.toLowerCase() === currentSecond.toLowerCase()) {
          i++;
          j--;
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    return true;
  }
};

//Input:
console.log(validPalindrome("A man, a plan, a canal: Panama"));

//Input:
console.log(validPalindrome("race a car"));

//Input:
console.log(validPalindrome(""));
