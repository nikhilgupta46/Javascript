function pipe(...args) {
  return function (...argsInner) {
    const recurseFn = (obj) => {
      let result = {};
      if (!obj) {
        throw "Invalid object";
      } else {
        Object.keys(obj).map((key) => {
          if (typeof obj[key] === "object") {
            result = { ...result, [key]: recurseFn(obj[key]) };
          } else if (typeof obj[key] === "function") {
            result = { ...result, [key]: obj[key](...argsInner) };
          } else {
            // more assertions here
            result = { ...result, [key]: obj[key] };
          }
        });
        return result;
      }
    };
    return recurseFn(args[0]);
  };
}

/* Input:
{
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}
Output:
{
  a : {
    b : 3,
    c : 1
  },
  d: -1
}
  */
const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: {
    f: { g: (a, b, c, d) => a * b * c * d },
  },
};

console.log(pipe(obj)(1, 1, 1, 2));
