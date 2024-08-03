const debounceWithOptions = ({
  fn = () => null,
  delay = 0,
  option = { trailing: true, leading: true },
}) => {
  let timerId = null;
  return function () {
    const context = this;
    const args = arguments;
    if (option.trailing) {
      if (!timerId) {
        timerId = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      }
    }
    if (option.leading) {
      if (!timerId) {
        fn.apply(context, args);
        timerId = setTimeout(() => {
          timerId = null;
        }, delay);
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {}, delay);
      }
    }
  };
};
