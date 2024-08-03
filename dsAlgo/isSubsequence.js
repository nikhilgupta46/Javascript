const isSubsequence = (str = "", target = "") => {
  if (str.length) {
    let sub = 0;
    let main = 0;

    while (sub < str.length && main < target.length) {
      if (str[sub] === target[main]) {
        sub++;
        main++;
      } else {
        main++;
      }
    }
    return sub === str.length;
  } else {
    return true;
  }
};

// Example 1:

// Input:
const s1 = "a";
const t1 = "b";
console.log(isSubsequence(s1, t1));
// Output: true

// Example 2:

// Input:
const s2 = "axec";
const t2 = "ahbxgdxc";
console.log(isSubsequence(s2, t2));
//Output: false;
