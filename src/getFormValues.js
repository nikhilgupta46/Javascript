const getValues = (inputs = []) => {
  console.log("inputs", inputs);
  if (!inputs) {
    throw new TypeError("not a valid entries in the form to capture values");
  }
  if (inputs.length === 0) {
    return "No Values present";
  }

  return Array.from(inputs).reduce((acc, node) => {
    if (node.nodeName === "INPUT") {
      const paths = node.name.split(".");
      const value = node.attributes.value.nodeValue;
      let temp = acc;
      paths.forEach((path, index) => {
        if (!temp[path]) {
          temp[path] = {};
        }
        if (index === paths.length - 1) {
          temp[path] = value;
        }
        temp = temp[path];
      });
    }
    return acc;
  }, {});
};

//Since by now the form will be mounted
setTimeout(() => {
  console.log(getValues(document.getElementById("parent").childNodes));
}, 0);
