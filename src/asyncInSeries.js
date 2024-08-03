const asyncInSeries = (asyncs = []) => {
  asyncs.reduce((acc, a) => {
    return acc
      .then(() => {
        return new Promise((resolve, reject) => {
          return a
            .then((res) => {
              console.log(res);
              resolve(res);
            })
            .catch((e) => {
              reject(e);
            });
        });
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, Promise.resolve());
};

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i === 3) {
        reject(`on ${i}`);
        // resolve(`Completing ${i}`);
      } else {
        resolve(`Completing ${i}`);
      }
    }, 1000 * i);
  });
};
// Input:
asyncInSeries([asyncTask(3), asyncTask(1), asyncTask(2)]);

/* Output:

error on 3
Completing 1
Completing 2

*/
