"use strict";

//let a =5, b = a;
//
//const obj ={
//    a: 5,
//    b: 1
//};
//
//const copy = obj;
//
//copy.a = 10;
//
//console.log(copy);
//
//console.log(obj);

function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        f: 4,
        g: 5,
        h: {
            arr: [5,5,5,5,5]
        }
    }
}

const newNumbers = copy(numbers);

newNumbers.d.g = 7;

console.log(numbers);

console.log(newNumbers);