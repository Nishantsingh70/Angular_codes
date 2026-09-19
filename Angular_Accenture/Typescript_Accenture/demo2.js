"use strict";
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

// block scope
var x2 = 300;
{
    x2 = 200;
    console.log(x2);
}
console.log(x2);

// Variable Hoisting
console.log(x4);
var x4 = 400;
