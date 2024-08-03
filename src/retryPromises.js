const wait = (delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
const retry = (fn, retries, delay, errorMessage) => {
  return new Promise((resolve, reject) => {
    return fn()
      .then((res) => resolve(res))
      .catch((e) => {
        if (retries > 0) {
          wait()
            .then(retry(fn, retries - 1, delay, errorMessage))
            .then(resolve)
            .catch(reject);
        }
        return reject(errorMessage);
      });
  }).catch((e) => e);
};
const asyncFn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("set timeout");
      reject();
    }, 2000);
  });
};

// Input:
retry(asyncFn, 3, 50, "Failed")
  .then((res) => console.log(res))
  .catch((e) => console.log("error catched", e));

/* Output:
... attempt 1 -> failed
... attempt 2 -> retry after 50ms -> failed
... attempt 3 -> retry after 50ms -> failed
... Failed.
*/
