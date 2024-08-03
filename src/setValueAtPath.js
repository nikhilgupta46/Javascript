const getArrayedPath = (path) => {
  let parsedV1 = path.split(".");
  parsedV1.forEach((p, i) => {
    const split = p.split("[");
    if (split.length > 1) {
      split.forEach((s, j) => {
        if (j === 0) {
          parsedV1.splice(i, 1, s);
        } else {
          parsedV1.splice(i + j, 0, s[0]);
        }
      });
    }
  });
  return parsedV1;
};
const set = (obj, path, value) => {
  let parsedPath = path;
  if (typeof path === "string") {
    parsedPath = getArrayedPath(path);
  }
  if (parsedPath.length === 0) {
    return "Enter valid path";
  }
  const setUpdate = (obj, path, value) => {
    if (path.length === 1) {
      if (isNaN(Number(path))) {
        obj[path] = value;
      }
    } else {
      let temp = obj[path[0]];
      const restPath = path.slice(1);
      setUpdate(temp, restPath, value);
    }
  };
  setUpdate(obj, parsedPath, value);
};

const object = { a: [[{}, [{}, {}, { b: { c: 3 } }]]] };

set(object, "a[0][1][2].b.c", 90);
console.log(object.a[0][1][2].b.c);
console.log("object", JSON.stringify(object));
// 4

// Input:
const abc = {
  a: {
    b: {
      c: [1, 2, 3],
    },
    d: {
      a: "hello",
    },
  },
};

const instance1 = JSON.parse(JSON.stringify(abc));
set(instance1, "a.b.c", "learnersbucket");
console.log(instance1.a.b.c);
console.log(instance1);

// set(object, ["x", "0", "y", "z"], 5);
// console.log(object.x[0].y.z);
// 5

// 8:08
