//extracting object values using: Object.keys(), Object.values() and Object.entries(


//ARRAY AND OBJECT ITERATION EXAMPLE
// Task 1

function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (var arr of dairy)
        console.log(arr);
}
logDairy();


// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}
birdCan();




// Task 3

function animalCan() {
    for (var key in bird) {
        console.log(key + ": " + bird[key]);
    }
}
animalCan();







function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.6) {
        dynamicKey = "speed";
    }else{
        dynamicKey = "color";
    } 
  
    var drone = {
        speed: 15,
        color: "orange"
    }
  
    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();



const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}
for(var key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key]);
}

//template literals == allows to embed vars inside the [] without the use of the + sign 

let greet = 'Hello';
let place = "World";
console.log(`${greet} ${place} !`);

`hello   
there` //and can span multiple lines 

console.log(`${1+1+1+1} starts!`); // possible to do math inside them

// to escape a ()`) use : `\`` === "`"; // true





