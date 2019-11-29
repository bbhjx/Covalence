//name var
let name = 'BN';
//states var
const states = 50;
//sum 9 var
let sum = 4 + 5;

console.log(sum)


//hello world alert
sayHello();

function sayHello() {
  alert('Hello World!');
}



//checks users age and alerts if under 21
function checkAge(name, age) {
  if (age < 21) {
      alert("Sorry " + name+ ", you aren't old enough to view this page!");
  }
}

// Call the checkAge function 4 times for testing multiple cases
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);


// array of objects
let otherVisitors = [
  {name: "Kim", age: 32},
  {name: "Sharon", age: 6},
  {name: "Jessie", age: 56},
  {name: "Ken", age: 24},
  {name: "Paul", age: 14}
];


// Loops through the array of objects and passes them into the checkAge function
for (i in otherVisitors) {
  checkAge(otherVisitors[i].name, otherVisitors[i].age);
}


//array of favorite vegetables
let myFavVeggies = ['Kale', 'Brocolli', 'Spinach', 'Arugala']

for (i in myFavVeggies) {
  console.log("I love" + " " + myFavVeggies[i]);
}

//function to return legnth of string
function getLength(str) {
  return str.length;
}

//store getLength results in variable, compare and log results
let helloWorldLength = getLength("Hello World");

if (helloWorldLength % 2 == 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}

