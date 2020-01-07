// // funtion declaration

// function greetDalina() {
// 	console.log("Hello Dalina!");
// }

// greetDalina();

// function greetAlf() {
// 	console.log("Hello Alf!");
// }

// console.clear();

// function greet(personName) {
// 	return console.log("Hello " + personName + "!!");
// }

// // greet("Andre");

// //
// // const greeting = greet("Alex");

// // console.log(greeting);

function testOdd(name) {
	if (name.length % 2 == 0) {
		return console.log("even");
	}
	return console.log("odd");
}

testOdd("Andi");

console.log(sum(6, 7));

function sum(a, b) {
	return a + b;
}

// const product = multiply (6,7);

// function expression
const multiply = function(a, b) {
	return a * b;
};

//arrow function

const divide = (a,b) =>{return a/b;}

console.log(divide (9,2));

