function curry(fn) {
  const nextFn = function (...args) {
    let temp = function (...args2) {
      return nextFn(...args, ...args2);
    };
    const value = fn(...args);
    temp.value = value;
    return temp;
  };
  return nextFn;
}

function sum(...params) {
  return params.reduce((a, b) => a + b, 0);
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5)); // 10
console.log(curriedSum(1)(2)(3)(4)(5)); // 10
