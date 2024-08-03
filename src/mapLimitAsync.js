Array.prototype.chop = function (length) {
  const chopped = [...this];

  const result = [];
  let i = 0;
  while (i < chopped.length) {
    const endIndex = i + length > chopped.length ? chopped.length : i + length;
    result.push(chopped.slice(i, endIndex));
    i += length;
  }
  return result;
};
console.log("start");

const mapLimit = (arr, limit, asyncFn) => {
  return new Promise((resolve, reject) => {
    const chopped = arr.chop(limit);
    console.log(chopped);
    const finalResult = chopped.reduce((a, b) => {
      return a.then((values) => {
        console.log("take");
        return new Promise((resolve, reject) => {
          const results = [];
          let tasksCompleted = 0;
          b.forEach((element) => {
            asyncFn(element, (error, value) => {
              if (error) {
                reject(error);
              } else {
                tasksCompleted++;
                results.push(value);
                if (tasksCompleted >= b.length) {
                  resolve([...values, ...results]);
                }
              }
            });
          });
        });
      });
    }, Promise.resolve([]));

    return finalResult.then((res) => resolve(res)).catch((err) => reject(err));
  });
};

//Input
let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    console.log(num);
    callback(null, num);
  }, 2000);
});

numPromise
  .then((result) => console.log("success:" + result))
  .catch(() => console.log("no success"));

console.log("end");

// //Input 2
// let numPromise2 = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
//   setTimeout(function () {
//     num = num * 2;
//     console.log(num);

//     // throw error
//     if (num === 6) {
//       callback(true);
//     } else {
//       callback(null, num);
//     }
//   }, 2000);
// });

// numPromise2
//   .then((result) => console.log("success:" + result))
//   .catch(() => console.log("no success"));
