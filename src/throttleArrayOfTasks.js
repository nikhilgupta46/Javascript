const throttle = (tasks, count, cb, timeout) => {
  let lastFn = [];
  let lastRan;
  let queue = [];
  let runnerRequests = [];
  let nextCallTimeStamp;
  return function () {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      console.log("here");
      queue = [...queue, ...tasks];
      const runValues = queue.splice(0, count);
      cb(runValues);
      lastRan = Date.now();
    } else {
      runnerRequests.push(Date.now());

      const runFnTimeStamp = runnerRequests.shift();
      if (runFnTimeStamp - lastRan >= timeout) {
        console.log("here 2");
        queue = [...queue, ...tasks];
        const runValues = queue.splice(0, count);
        cb(runValues);
        lastRan = Date.now();
      } else {
        if (!lastFn.length) {
          console.log("here 3");
          const timer = timeout - (runFnTimeStamp - lastRan);
          nextCallTimeStamp = Date.now() + timer;
          lastFn.push(
            setTimeout(() => {
              console.log("which", timer);
              queue = [...queue, ...tasks];
              const runValues = queue.splice(0, count);
              cb(runValues);
              lastRan = Date.now();
              lastFn.splice(0, 1);
            }, timer)
          );
        } else {
          console.log("here 4");
          const timer = nextCallTimeStamp + timeout - Date.now();
          nextCallTimeStamp = nextCallTimeStamp + timeout;
          lastFn.push(
            setTimeout(() => {
              console.log("which 2", timer);
              queue = [...queue, ...tasks];
              const runValues = queue.splice(0, count);
              cb(runValues);
              lastRan = Date.now();
              lastFn.splice(0, 1);
            }, timer)
          );
        }
      }
    }
  };
};

// Input:
const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 4;

const myThrottle = throttle(
  task,
  count,
  (element) => {
    console.log(element);
  },
  2000
);
myThrottle();

myThrottle();

myThrottle();
myThrottle();
setTimeout(() => {
  myThrottle();
}, 7000);
