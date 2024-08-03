const asyncParallel = (asyncFns, callback) => {
  const results = [];
  let tasksCompleted = 0;
  asyncFns.forEach((fn) => {
    fn.then((value) => {
      results.push(value);
      tasksCompleted++;
      if (tasksCompleted >= asyncFns.length) {
        callback(results);
      }
    });
  });
};

// promise type
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, value * 1000);
  });
}
// non-promise type
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return (callback) => {
    setTimeout(() => {
      console.log(value);
      callback(value);
    }, value * 1000);
  };
}

// Input
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskList, (result) => {
  console.log("results", result);
});
