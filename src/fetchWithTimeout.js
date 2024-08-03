const fetchWithTimeout = ({ url = "", timeout = 0 }) => {
  return new Promise((resolve, reject) => {
    console.log("fetch call", url, timeout);
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId = null;
    try {
      fetch(url, { signal }).then((response) => {
        clearTimeout(timerId);
        resolve(response.json());
      });
    } catch (e) {
      reject(e);
    }
    timerId = setTimeout(() => {
      controller.abort();
    }, timeout);
  });
};

fetchWithTimeout({
  url: "https://jsonplaceholder.typicode.com/todos/1",
  timeout: 1000,
})
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.log("error 1", error);
  });

fetchWithTimeout({
  url: "https://jsonplaceholder.typicode.com/todos/2",
  timeout: 10,
})
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.log("error 2", error);
  });
