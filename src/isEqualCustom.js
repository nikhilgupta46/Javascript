const Types = {
  array: "[object Array]",
  object: "[object Object]",
  function: "[object Function]",
  string: "[object String]",
  bool: "[object Boolean]",
};

const compare = (input1, input2) => {
  const currentType1 = Object.prototype.toString.call(input1);
  const currentType2 = Object.prototype.toString.call(input2);
  if (
    (!input1 && currentType1 !== Types.bool) ||
    (!input2 && currentType2 !== Types.bool)
  ) {
    return new TypeError("Please enter valid input");
  }
  if (currentType1 === currentType2) {
    // if array

    if (currentType1 === Types.array) {
      if (input1.length === input2.length) {
        let isSame = true;
        for (let i = 0; i < input1.length; i++) {
          isSame = isSame && compare(input1[i], input2[i]);
          if (!isSame) {
            return false;
          }
        }
        return isSame;
      } else {
        return false;
      }
    } else if (currentType1 === Types.object) {
      if (Object.keys(input1).length === Object.keys(input2).length) {
        let isSame = true;
        Object.keys(input1).forEach((key) => {
          isSame = isSame && compare(input1[key], input2[key]);
        });
        return isSame;
      } else {
        return false;
      }
    } else if (currentType1 === Types.function) {
      if (input1.length === input2.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return input1 === input2;
    }
  }
  return false;
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 2, 4, 5];
console.log(compare(arr1, arr2));
// returns false

let arrObj1 = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: 3,
    d: function () {
      console.log("abcd");
    },
  },
  4,
  5,
];
let arrObj2 = [
  1,
  2,
  {
    c: 3,
    b: 2,
    a: 1,
    d: function () {
      console.log("abcd");
    },
  },
  4,
  5,
];
console.log(compare(arrObj1, arrObj2));
// returns true

let arr4 = [
  [1, 2],
  [3, 4, 5],
];
let arr3 = [
  [1, 2],
  [3, 4, 5],
];
// returns true

console.log(compare(arr4, arr3));
console.log(compare("arr4", "arr4"));
console.log(compare(12, 13));
