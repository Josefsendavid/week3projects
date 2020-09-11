//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

console.log(add(1, 2))     // What will this print? : 3
console.log(add)          // What will it print and what does add represent? : Will return the function add
console.log(add(1, 2, 3)); // What will it print : return 3 because only 2 parameters is available
console.log(add(1));	  // What will it print : NaN
console.log(cb(3, 3, add)); // What will it print : 3+3 = 6
console.log(cb(4, 3, sub)); // What will it print : 4-3 = 1
console.log(cb(3, 3, add())); // What will it print (and what was the problem) : TypeError: callback is not a function
console.log(cb(3, "hh", add));// What will it print : returns 3hh as a string

try {
    var cb = function (n1, n2, callback) {
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    };
    throw new Error('Fejl')
} catch (e) {
    console.error(e.name + ': ' + e.message)
}

var mul = function (n1, n2, callback) {
    return n1 * n2
}

