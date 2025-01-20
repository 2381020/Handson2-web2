let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["andrew", "jonathan", "jordy"];

let scores: Array<number> = [1, 2, 3, 4];
let fruits: Array<string> = ["Apple", "orage", "banana"];

let mixed: (string | number)[] = [1 ,"two", 3, "four"];

numbers.push(6);
names.pop();

numbers.forEach((num) => {
    console.log("Number: ", null);

});

const doubledNumbers = numbers.map((num) => num * 2);