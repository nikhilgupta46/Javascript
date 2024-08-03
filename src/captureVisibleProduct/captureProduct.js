const captureProduct = () => {
  blocks.forEach((block) => {
    if (isInViewPort(block)) {
      // made API Call to capture user interaction details
      console.log("captured details", block.innerText);
    }
  });
};
const isInViewPort = (block) => {
  const dimensions = block.getBoundingClientRect();
  return (
    dimensions.top >= 0 &&
    dimensions.left > 0 &&
    dimensions.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    dimensions.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};

function debounce(fn, delay) {
  let timerRef;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      fn.call(context, args);
    }, delay);
  };
}

const blocks = document.querySelectorAll(".blocks");
document.addEventListener("scroll", debounce(captureProduct, 1000), false);
