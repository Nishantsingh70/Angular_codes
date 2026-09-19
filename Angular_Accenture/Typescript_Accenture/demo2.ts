// ES6 (TypeScript) = JavaScript (ES5) + 1
// Object Oriented Feature

console.log("Welcome to TypeScript");

    //  1) Create first.ts file 
    //  2) Run tsc first.ts 
    //  3) It will generate first.js file 
    //  4) Js file will understood by our browser.

// Variables
// var (ES5)
// let, const (ES6)

var x1 = 100;
console.log(x1);

// type Inference 

//x1 = "Nishant";
console.log(x1);

// block scope in var
var x2 = 300;

{
    x2 = 200;
    console.log(x2);
}
console.log(x2);

// Variable Hoisting
//console.log(x4);
//var x4 = 400;


// block scope in let
let x6 = 300;

{
    x6 = 200;
    console.log(x6);
}
console.log(x6);


//================================================================

// data types (number, string, boolean, any, void, null, undefined)

// If we declare variable without assigning any value, it will be of type any.
// If we declare variable with : type, then we can assign only that type of value.

let n1;
n1 = 20;
n1 = "Nishant";
n1 = true;

let n2 = "Welcome";
// n2 = 20;  // give error

let n3: number;
n3 = 30;
//n3 = "nishant";  // give error

let n4: string = "nishant";
let n5: any = "nishant";
n5 = 20;
let n6: boolean = true;


//================================================================

// function
// Regular function / function statement  (ES5)

show();      // It will not give any error, print the output // function hoisting
function show() {
    console.log("Regular Function");
}

// Arrow function (ES6) => (parameter List) => (function body)


//arrowFun();  // give error because here no function hoisting is happening with Arrow function.

let arrowFun = () => {
    console.log("Arrow Function");
}
arrowFun();


let result = ((a: number,b: number) =>{
    return a + b;
})
console.log(result(10,20));

// or

let result2 = ((a: number,b: number) : number => a + b);
console.log(result2(20,30));


let printMessage = (message: string) : void => console.log(message);
printMessage("Hello World");

let printMessage2 = (message: any) : void => console.log(message);
printMessage2("Hello World");
printMessage2(true);
printMessage2(2);
printMessage2(3.14);


function hello(str: string): number {
    return str.length;
}

console.log("Length is " + hello("nishant"));
console.log("Length is " + hello("nishant singh"));


// ===================================================

// string

let city = "Mumbai"
let country = 'India'


console.log(`${city} is in ${country}`);

let htmlCode = `<h1>Html</h1>
                <p>Para</p>
                <h2>Heading</h2>
                <p>Para2</p>
                `;

// ===========================================

// Array 
let listOfNumbers : number[] = [1, 2, 3, 4];
let listOfItems : any[] = [1, "hello", true, 2.1];

// loops - while, do while, for, if, for..of , for..in

for(var i=0; i<5; i++){
    console.log(i);
}
console.log(++i);



for(let j=0; j<5; j++){
    console.log(j);
}
//console.log(++j);  // give error because of let block scope


for(let k = 0; k<listOfNumbers.length; k++){
    console.log(listOfNumbers[k]);
}

console.log("for..of");
// for..of
for(let num of listOfNumbers){
    console.log(num);
}

console.log("for..in");
// for..in
for(let index in listOfNumbers){
    console.log("index : " + index);     // it will print index
    console.log("value : " + listOfNumbers[index]);  // it will print value
}


// Array method 

// find method with function
listOfNumbers.find(function(num){
    console.log(num);
})

//find method with arrow
listOfNumbers.find(num => console.log(num));


console.log(listOfNumbers.find(num => num>2));
console.log(listOfNumbers.filter(num => num>2));
console.log(listOfNumbers.map(num => num*2));



