function merger() {
  const args = arguments;
  const context = this;
  let target = {};
  let i = 0;
  let deep = false;
  if (typeof args[0] === "boolean") {
    deep = args[0];
    i++;
  }
  const mergeRecurse = (target, obj) => {
    for (let key in obj) {
      if (deep && typeof obj[key] === "object") {
        if (!target[key]) {
          target[key] = {};
        }
        mergeRecurse(target[key], obj[key]);
      } else {
        target[key] = obj[key];
      }
    }
  };

  while (i <= args.length) {
    mergeRecurse(target, args[i]);
    i++;
  }
  return target;
}

let obj1 = {
  name: "prashant",
  age: 23,
  nature: {
    helping: true,
    shy: false,
    angry: true,
  },
};

let obj2 = {
  qualification: "BSC CS",
  loves: "Javascript",
  nature: {
    angry: false,
    shy: true,
  },
};

//Shallow merge
console.log(merger(obj1, obj2));

/*
  Object {
    age: 23,
    loves: "Javascript",
    name: "prashant",
    nature: Object {
      angry: false,
      shy: true
    },
    qualification: "BSC CS"
  }
  */

//Deep merge
console.log(merger(true, obj1, obj2));
/*
  Object {
    age: 23,
    loves: "Javascript",
    name: "prashant",
    nature: Object {
      angry: false,
      helping: true,
      shy: true
    },
    qualification: "BSC CS"
  }
  */
