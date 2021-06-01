function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}
console.log(toCelsius(77));

//Nested funciton
function fun1(a) { 
    function fun2(b) { 
        return a + b;
    }
    return fun2;
    }
console.log(fun1(3)(3));

//recursive function
function countDown(n){
    console.log(n);
    const newNumber = n -1;
    if(newNumber >= 0){
        countDown(newNumber);
    }
}
console.log(countDown(5))