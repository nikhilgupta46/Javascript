function curry(fn, limit) {
  return function (...args) {
    if (args.length === 0) {
      return fn();
    }
    let storage = [...args];
    if (storage.length === limit) {
      return fn(...storage);
    } else {
      const temp = function (...args2) {
        storage.push(...args2);
        if (storage.length === limit) {
          return fn(...storage);
        } else {
          return temp;
        }
      };
      return temp;
    }
  };
}

function sum(...params) {
  return params.reduce((a, b) => a + b, 0);
}
const curriedSum = curry(sum, 5);

console.log(curriedSum(1, 2, 3)(4)(5));
console.log(curriedSum(1, 2)(3)(4)(5));
console.log(curriedSum(1)(2)(3)(4)(5));
console.log(curriedSum());
