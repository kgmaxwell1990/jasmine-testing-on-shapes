function areaOfCircle(n) {
    let result = 3.1416 * (n * n);    
    if(typeof(n) != 'number') {
        return "This is not a number";
    }else if(n <= 0){
        return "You cannot do that";
    }else {
    return Number(result.toFixed(2));
    }
}

function squareRoot(n) {
    let result = Math.sqrt(n);
    if(typeof(n) != 'number') {
        return "This is not a number";
    }else if(n <= 0){
        return "You cannot do that";
    }else {
    return Number(result.toFixed(2));
    }
}

function squareMe(n) {
    let result = n * n ;
    if(typeof(n) != 'number') {
        return "This is not a number";
    }else if(n <= 0){
        return "You cannot do that";
    }else {
    return Number(result.toFixed(2));
    }
}

function cubeMe(n) {
    let result = n * n * n ;
    if(typeof(n) != 'number') {
        return "This is not a number";
    }else if(n <= 0){
        return "You cannot do that";
    }else {
    return Number(result.toFixed(2));
    }
}

function areaOfTriangle(base, height){
    let result = (base*height)/2;
    if(typeof(base) != 'number' || typeof(height) != 'number') {
        return "This is not a number";
    }else if(base <= 0 || height <= 0){
        return "You cannot do that";
    }else {
        return Number(result.toFixed(2))   
    }
};

// Write tests for and create a function that takes a year as a parameter. it will calculate how many years it is until 2018.

// Write tests for and create a function that finds the area of a cylinder given the radius and height.
