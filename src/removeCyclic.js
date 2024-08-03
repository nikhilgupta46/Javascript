const removeCycle = (item) => {
  const set = new WeakSet();
  set.add(item);

  const remover = () => {
    console.log("set", set);
    for (let key in item) {
      console.log("key", key);
      if (typeof item[key] === "object") {
        if (set.has(item[key])) {
          delete item[key];
        } else {
          set.add(item[key]);
          remover(item[key]);
        }
      }
    }
  };
  remover(item);
};

//Input:
const List = function (val) {
  this.next = null;
  this.val = val;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

removeCycle(item1);
// this form a cycle, if you console.log this you will see a circular object,
// like, item1 -> item2 -> item3 -> item1 -> so on.

// Output:
// removes cycle
// item1 -> item2 -> item3
