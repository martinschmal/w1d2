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

const divide = (a, b) => {
	return a / b;
};

// console.log(divide (9,2));

const bootcamps = [ "webDev", "UX/UI", "Data" ];
const cities = [ "Berlin", "Madrid", "Barcelona", "Amsterdam" ];

let studentCountires = [];
studentCountires = [ "Greece", "Ghana", "Japan", "Finnland" ];

console.log(studentCountires[0]);
console.log(studentCountires[studentCountires.length - 1]);

// objects are mutable, strings are not mutable

studentCountires[0] = "Germany";
console.log(studentCountires);

// push will append to an array
studentCountires.push("Gahna");

//unshift pre-pending an element to it
studentCountires.unshift("USA");

//adding to a certain position
// "insert at position 2(3) and others shiftet"
studentCountires.splice(2, 0, "Canada");

//removoe elemets
studentCountires.splice(0, 0);
console.log(studentCountires);

//remove first element
studentCountires.shift();

//remove last element
studentCountires.pop();

for (let i = 0; i < studentCountires.length; i++) {
	console.log(studentCountires[i].toUpperCase());
}

studentCountires.forEach(function(element,index,arr) {
	console.log("here is a country",element,index,arr);
});

function callback(country,index){
	console.log (country, index);
			}

			studentCountires.forEach(callback);


// loop through an array

for (const country of studentCountires){
	console.log(country);
}

// transform string in to an array
let b = Array.from ("Hello World!");
let x = "Helloworld".split("");


//join array into string
b.reverse();
b.sort();
x.join("");

console.log(x);





