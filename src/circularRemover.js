const removeCycle = (obj) => {
  //set store
  const set = new WeakSet([obj]);
  console.log("set", set);
  //recursively detects and deletes the object references
  (function iterateObj(obj) {
    for (let key in obj) {
      // if the key is not present in prototye chain
      console.log("key", key);
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          // if the set has object reference
          // then delete it
          if (set.has(obj[key])) {
            console.log("yo", key, obj[key]);
            delete obj[key];
          } else {
            //store the object reference
            set.add(obj[key]);
            //recursively iterate the next objects
            iterateObj(obj[key]);
          }
        }
      }
    }
  })(obj);
};

// Input:
class List {
  constructor(value) {
    this.next = null;
    this.val = value;
  }
}

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

console.log(item1);
removeCycle(item1);
console.log(item1);

// Output:
/*
{val: 10, next: {val: 20, next: {val: 30}}}
*/
