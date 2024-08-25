/* 
Write a function named getAreaOfCircle. 
It takes a radius parameter. 
It calculates and returns the area of a circle with that radius.

Formula to find area of a circle: A = πr^2
*/

function squareNumber(x) {return x * x;}

function getAreaOfCircle(radius) {
    let radiusSquared = squareNumber(radius);
    let areaCalculation = Math.PI * radiusSquared;

    return areaCalculation;
}

/*
Write a function named getCircumferenceOfCircle. 
It takes a radius parameter. 
It calculates and returns the circumference of a circle with that radius.

Formula to find circumference of a circle: C = 2πr
*/

function getCircumferenceOfCircle(radius) {return 2 * Math.PI * radius;}
