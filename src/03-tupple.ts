let person: [string, number, boolean] = ["john", 30, true];

let coordinate: [number, number] = [10.5, 20.1];

let optionalTuple: [String, number?] = ["hello"];
optionalTuple = ["hello", 42];

let [name, age, isEmployee] = person;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Employe: ", isEmployee);

let employees: [string, number][] = [
  ["john", 38],
  ["jane", 30],
  ["bob", 22],
];

employees.forEach(([name, age]) => {
  console.log(`${name} is ${age} years old`);
});

export {};
