// * Following methods:
// * 1. Constructor
// *   => new URLSearchParams("foo=1&bar=2&foo=10")
// *   => new URLSearchParams("?foo=1&bar=2&foo=10")
// *   => new URLSearchParams({"foo": 1, "bar": 2})
// *   => new URLSearchParams([["foo", 1], ["bar", 2], ["foo", 10]])

class UrlSearchParamsCustom {
  constructor(input) {
    this.order = [];
    this.finalObject = this.extractKeysAndvalues(input);
  }

  extractKeysAndvalues(input) {
    if (!input) {
      return new TypeError("Please enter a valid input");
    } else if (input) {
    }
    const splittedInput = input.split("&");
    const parsedObject = splittedInput.reduce((acc, input) => {
      const [key, value] = input.split("=");
      if (acc?.[key]) {
        acc[key].push(value);
        this.order.push(key);
      } else {
        acc[key] = [value];
        this.order.push(key);
      }
      return acc;
    }, {});
    return parsedObject;
  }
  get(key) {
    return this.finalObject[key]?.[0];
  }
  getAll(key) {
    return this.finalObject[key];
  }
  has(key) {
    return Boolean(this.finalObject[key]);
  }
  keys() {}
  set(key, value) {
    this.finalObject[key] = [value];
  }
  append(key, value) {
    if (this.finalObject[key]) {
      this.finalObject[key].push(value);
    } else {
      this.set(key, value);
    }
  }
  forEach(fn) {
    for (let key in this.finalObject) {
      const values = this.finalObject[key];
      values.forEach((val) => {
        fn(key, val);
      });
    }
  }
  remove(key) {
    delete this.finalObject[key];
  }
  toString() {
    let string = "";
    const copyObj = JSON.parse(JSON.stringify(this.finalObject));

    for (let key of this.order) {
      const value = copyObj[key][0];
      string.concat(`${key}=${value}`);
    }
  }
}
