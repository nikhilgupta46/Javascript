const cachedCall = ({ timer = 0 }) => {
  const Cache = {};
  return function () {
    const context = this;
    const args = arguments;
    console.log(arguments);

    const cacheKey = JSON.stringify(
      Object.keys(args[1]).length ? args[1] : args[0]
    );

    const cacheData = Cache[cacheKey];
    const isCacheValid = Date.now() - cacheData?.cacheTime <= timer;
    if (isCacheValid) {
      const apiCallPending = cacheData.response instanceof Promise;
      if (apiCallPending) {
        console.log("From Same Api call");
        return cacheData.response;
      } else {
        console.log("From Cache");
        return Promise.resolve(cacheData.response);
      }
    } else {
      // clear cache
      if (cacheData) {
        delete Cache[cacheKey];
      }
      console.log("New API Call");
      const apiCallInstance = new Promise((resolve, reject) => {
        try {
          setTimeout(async () => {
            const response = await fetch(args[0]);

            const cacheTime = Date.now();
            Cache[cacheKey] = {
              response,
              cacheTime,
            };
            resolve(response);
          }, 1000);
        } catch (e) {
          reject(e);
        }
      });
      Cache[cacheKey] = {
        response: apiCallInstance,
        cacheTime: Date.now(),
      };
      return apiCallInstance;
    }
  };
};

// Input
const call = cachedCall({ timer: 1500 });

// first call
// an API call will be made and its response will be cached
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("response captured in then block, CALL 1")
);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("response captured in then block, CALL 2")
);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log("response captured in then block, CALL 3")
);

call("https://jsonplaceholder.typicode.com/todos/2", {}).then((a) =>
  console.log("response captured in then block, CALL 1")
);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("response captured in then block")
  );
}, 1200);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log("response captured in then block")
  );
}, 3000);
