const helper = (array = []) => {
  if (!Array.isArray(array)) {
    throw new TypeError("Please enter valid type of input");
  } else if (array.length === 0) {
    return "No valid entries";
  }
  let iterator = 0;
  let current;
  const next = () => {
    if (done()) {
      return null;
    } else {
      current = array[iterator];
      iterator++;
      return current;
    }
  };
  const done = () => {
    return array.length === iterator;
  };
  const reset = () => {
    iterator = 0;
    current = null;
    return "reset done";
  };
  return {
    next,
    done,
    reset,
  };
};

let iterator = helper([1, 2, "hello"]);
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"
console.log(iterator.reset());
console.log(iterator.next()); // 1
