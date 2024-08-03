// Question Link: https://devtools.tech/questions/s/implement-tuple-function-or-linkedin-frontend-interview-question-or-javascript-problem-solving---qid---hr6hxjztrf5BmneXlUtT

const tuple = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Please input a valid string");
  } else if (!input.length) {
    return [];
  }
  // the input s are valid let's go ahead with the conditions
  // `(1,2,3),(4,5,6),(7,8,9)`
  // break the string first on ),
  // first group: (1,2,3
  // second group: ,(4,5,6
  // third group: ,(7,8,9
  // remove first character that will be ( in this case
  // gets all the groups
  // transform it in the array and parse each character to a number
  const filterAndGetRowValues = (row) => {
    const filteredValues = [];
    row.split("").forEach((value) => {
      const parsedValue = Number(value);
      if (!isNaN(parsedValue) && value !== " ") {
        filteredValues.push(parsedValue);
      }
    });
    return filteredValues;
  };
  const splittedArray = input.split(")");
  const groups = [];
  splittedArray.forEach((row) => {
    if (row.length) {
      const updatedRow = filterAndGetRowValues(row);
      groups.push(updatedRow);
    }
  });
  return groups;
};

function multiply(position) {
  const array = [...this];
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, row) => {
    acc = acc * row[position - 1];
    return acc;
  }, 1);
}

Array.prototype.multiply = multiply;

const input = `(1, 2, 3) , (4, 5, 6) ,  (7, 8, 9)`;

// Convert it into
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const item = tuple(input);

// Multiples 2nd item in each nested array
// i.e. 2 * 5 * 8 = 80
console.log(item.multiply(2));
