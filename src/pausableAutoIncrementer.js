const timer = (initialValue, stepper, interval = 1000) => {
  let timerRef = null;
  let currentValue = initialValue;
  const startTimer = () => {
    timerRef = setInterval(() => {
      console.log(currentValue);
      currentValue += stepper;
    }, interval);
  };
  const stopTimer = () => {
    clearInterval(timerRef);
  };
  const reset = () => {
    currentValue = initialValue;
    clearInterval(timerRef);
  };
  const restart = () => {
    reset();
    startTimer();
  };
  return { stopTimer, startTimer, reset, restart };
};

// Input:
const timerObj = timer(10, 10);
//start
timerObj.startTimer();

//stop
setTimeout(() => {
  timerObj.stopTimer();
}, 6500);

//start
setTimeout(() => {
  timerObj.startTimer();
}, 6600);

//stop again
setTimeout(() => {
  timerObj.stopTimer();
}, 11000);

//reset
setTimeout(() => {
  timerObj.reset();
}, 12000);

//start
setTimeout(() => {
  timerObj.startTimer();
}, 13000);

//start
setTimeout(() => {
  timerObj.restart();
}, 19000);

//stop last
setTimeout(() => {
  timerObj.stopTimer();
}, 24000);

/* Output: 10;
10
20
30
40
50
60
70
80
90
100
10
20
30
40
50
10
20
30
40
*/

// 1:02 am
