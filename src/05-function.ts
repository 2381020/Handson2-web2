function add(a: number, b: number): number {
    return a+b;

};


const multiply = (x: number, y: number): number => {
    return x * y;
};


function greet(to: string, subject: string = "No subject" ): string {
    return `Email to : ${to}, Subject: ${subject}`;
}

function sum(...numbers: number[]): number{
    return numbers.reduce((total, num) => total + num, 0);
}

function processInput(input: number): number;
function processInput(input: string): string;
function processInput(input: number | string): number | string{
    if (typeof input === "number"){
        return input * 2;
    }
    return input.toUpperCase();

    
}

console.log(greet("john"));