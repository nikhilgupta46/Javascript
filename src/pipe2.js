function pipe() {
  const args = arguments;
  console.log(args);
  return function () {
    console.log(arguments);
    let parameters = arguments[0];
    [...args].forEach((fn) => {
      parameters = fn(parameters);
    });
    return parameters;
  };
}
// Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const result = pipe(getSalary, addBonus, deductTax)(val);
console.log("result", result);
//Output: 7700;
