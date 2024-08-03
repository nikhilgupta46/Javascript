const getArrayedPath = (path) => {
  if (path.length === 0) {
    return [];
  }
  let splittedPath = path.split(".");
  splittedPath.forEach((sp, index) => {
    if (sp.length > 1) {
      let splittedAgain = sp.split("[");
      splittedAgain.forEach((sp2, j) => {
        if (j > 0) {
          splittedPath.splice(index + j, 0, sp2[0]);
        } else {
          splittedPath.splice(index + j, 1, sp2);
        }
      });
    }
  });
  return splittedPath;
};

const get = (obj, path) => {
  let parsedPath = path;
  if (typeof path === "string") {
    parsedPath = getArrayedPath(path);
  }
  const getRecurse = (obj, path) => {
    if (path.length === 0) {
      return obj;
    } else if (path.length === 1) {
      const value = Number(path[0]);
      const isNumber = !isNaN(value);
      return obj?.[isNumber ? value : path[0]];
    } else {
      return getRecurse(obj?.[path[0]], path.slice(1));
    }
  };

  return getRecurse(obj, parsedPath);
};

// Input:
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, "a.b.c[3]"));

// Output:
// [1,2,3]
// 1
// 2
// undefined
