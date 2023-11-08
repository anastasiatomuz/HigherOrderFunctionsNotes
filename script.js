/*
Higher order function:
A function that takes another function as an input or returns a function
*/


function greet(){
    console.log("hello");
}

function sing(callback){
    console.log("singing");
    callback();
}

sing(greet);

//return a function within a function
function multiplier(factor){
    return x => x*factor; //returning a function 
}

let doubler = multiplier(2);
let tripler = multiplier(3);

vals = [5, 10, 11, -5, -10];
newVals = vals.map(x => x*2);
console.log(newVals);


const filter = vals.filter((values)=>{return values<0;});

filter.forEach(x => console.log(x));

function sum(acc, currVal){
    return acc+currVal;
}

//"reduce" all elements to one element with a higher-order function where 
let answer = vals.reduce(sum);
console.log(answer);