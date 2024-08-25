/* 
Write a function named getAreaOfCircle. 
It takes a radius parameter. 
It calculates and returns the area of a circle with that radius.

Formula to find area of a circle: A = πr^2
*/

function squareNumber(x) {return x * x;}
function divideByTwo(x) {return x / 2;}
function multiplyTwoNumbers(a, b) {return a * b;}

function getAreaOfCircle(radius) {
    let radiusSquared = squareNumber(radius);
    let areaCalculation = Math.PI * radiusSquared;

    return areaCalculation;
}
let areaOfCircle = getAreaOfCircle(30);
console.log(`The area of your circle is: ${areaOfCircle}`);

/*
Write a function named getCircumferenceOfCircle. 
It takes a radius parameter. 
It calculates and returns the circumference of a circle with that radius.

Formula to find circumference of a circle: C = 2πr
*/

function getCircumferenceOfCircle(radius) {return 2 * Math.PI * radius;}
let circumferenceOfCircle = getCircumferenceOfCircle(25);
console.log(`The circumference of your circle is: ${circumferenceOfCircle}`);
/*
Write a function named getAreaOfSquare. 
It takes a side parameter. 
It calculates and returns the area of a square with that side length.

Formula to find area of a square: A = a^2
*/

function getAreaOfSquare(side) {return squareNumber(side);}
let areaOfSquare = getAreaOfSquare(5);
console.log(`The area of your square is: ${areaOfSquare}`);

/*
Write a function named getAreaOfTriangle. 
It takes two parameters: base and height. 
It calculates and returns the area of a triangle with that base and height.

Formula to find area of a triangle: A = h*b/2
*/ 

function getAreaOfTriangle(base, height) {
    let baseTimesHeight = multiplyTwoNumbers(height, base);
    let result = divideByTwo(baseTimesHeight);

    return result;
}

let areaOfTriangele = getAreaOfTriangle(20, 20);
console.log(`The area of your triangle is: ${areaOfTriangele}`);