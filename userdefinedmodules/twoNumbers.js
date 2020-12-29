console.log("Addition of two numbers");

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

module.exports.subtract = subtract;
module.exports.add = add;
