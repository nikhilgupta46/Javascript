const call = (fn, retries, timer) => {
  let failCount = 0;
  let lastRun;
  let isClosed = false;
  return function () {
    const context = this;
    const args = arguments;
    if (isClosed) {
      console.log("Service Unavailable");
      return;
    } else {
      lastRun = Date.now();
      try {
        const result = fn(...args);
        failCount = 0;
        return result;
      } catch (e) {
        console.log(e);
        failCount++;
        if (failCount >= retries) {
          isClosed = true;
          setTimeout(() => {
            isClosed = false;
          }, timer);
        }
      }
    }
  };
};

const test = () => {
  let count = 0;
  return () => {
    count++;
    if (count < 4) {
      throw "error";
    } else {
      console.log("Passed on", count);
    }
  };
};

const t = test();
const caller = call(t, 3, 2000);

// Error
caller();
caller();
caller();

//Service unavailable
caller();
caller();
caller();
//Service unavailable
setTimeout(() => {
  caller();
}, 1900);

// Passed with valid result
setTimeout(() => {
  caller();
}, 3000);
