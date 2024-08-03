const myLocalStorage = {
  store: {},
  setItem: function (item, value, timeout) {
    this.store[item] = value;
    setTimeout(() => {
      this.clear(item);
    }, timeout);
  },
  getItem: function (item) {
    return this.store[item] ?? null;
  },
  clear: function (item) {
    delete this.store[item];
  },
  clearAll: function () {
    this.store = {};
  },
};

// Input:
myLocalStorage.setItem("foo", "bar", 1000);

setTimeout(() => {
  console.log(myLocalStorage.getItem("foo"));
}, 1500);

// Output: null;
