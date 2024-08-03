let obj = { i: 0 };
obj = new Proxy(obj, {
  get: (target, prop, receiver) => {
    console.log("receiver", receiver, target);
    if (prop === "i") {
      target[prop] = target[prop] + 1;
      return target;
    }
  },
});

console.log(obj.i); // 1
console.log(obj.i); // 2
console.log(obj.i); // 3
