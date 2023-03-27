//============================== ARRAYS IN JS ==================================

//the spread operator 



//copy array into completely seperate one 
const fruits11 = ['apples', 'pears']
const fruits2 = [...fruits11]
fruits11.pop()
console.log(fruits11, "not", fruits2)








//copy array or obj into a seperate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// convert string into array using the spread operator 
const greeting = "Hello";
const arrString = [...greeting];
console.log(arrString);


//to join arrays together
const fruits1 = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits1, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

//to join objects together
const flying = { wings: 2 }
const car = { wheels: 4 }
const ship = {sails: 5}
const flyingSwimmingCar = {...flying, ...car, ...ship}
console.log(flyingSwimmingCar) // {wings: 2, wheels: 4}

//add members without using push() 
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);




let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//set === used to filter out unique members in an array
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);



const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(name, index) {
    console.log(`${index + 1}. ${name}`)
}
fruits.forEach(appendIndex);

//filter()
const nums = [0,10,20,30,40,50];
const arr = nums.filter( function(num) {
    return num > 20;
})
console.log(arr);


// convert an object to an array 

const result = []
const drone = {
    speed: 200,
    color: 'Black',
    model: 2022
}
const dronesKeys = Object.keys(drone)
dronesKeys.forEach( function(key){
    result.push(key, drone[key])
})
console.log("The new result array for the drone object is: ", result);
