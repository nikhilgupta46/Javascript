const deepFlatten = (obj) => {
  if (!Object.keys(obj).length) {
    return "Empty Object, Please specify valid input";
  }
  let target = {};

  const recurseMerge = (obj, path = "") => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        recurseMerge(obj[key], `${path ? path + "." : ""}${key}`);
      } else {
        target[`${path ? path + "." : ""}${key}`] = obj[key];
      }
    }
  };
  recurseMerge(obj);
  return target;
};

// Input:
console.log(
  deepFlatten({
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
        L: 56,
      },
      Q: [1, 2],
    },
  })
);

/* Output:
{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}
  */
