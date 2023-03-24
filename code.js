
// ============ OOP Paradigm =============


class Italy {
    constructor(area, group, teacher) {
        this.area = area
        this.group = group
        this.teacher = teacher
    }
}

class France {
    constructor(area, group, teacher){
        this.area = area
        this.group = group
        this.teacher = teacher
    }
}

class School {
    constructor(area, italyGroup, franceGroup) {
        this.age = area
        this.Italy = new Italy(45, italyGroup)
        this.France = new France(70, franceGroup)
    }
}

var SunSchool = new School("1.5 - 7", "middle", "nursery")

console.log(SunSchool.Italy);
console.log(SunSchool.France);




class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);
console.log(myThirdTrain);

var train4 = new Train('red', false);
var lights = train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
mySecondTrain.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.



//constructor functions === they are in-built

//e.g Date, Math, Object
//you can also define custom constractors as in the example below

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}


let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
var kiwi = kiwiIcecream.meltIt(); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
var apple = appleIcecream.meltIt();
console.log(kiwi);
console.log(apple);
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}






// //inheritance 
// class Animal { /* ...class code here... */ }
// class Bird extends Animal { /* ...class code here... */ }
// class Eagle extends Bird { /* ...class code here... */ }

//encapsulation 
//it deals with making a code implementation hidden 


//Polymorphism
//it is a concept that explains that, one method can be used to perform different tasks depending on the input that is manipuilating it.
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"



var purchase1 = {
    shoes: 200,
    stateTax: 1.2,
    totalPrice: function() {
        var calculate = this.shoes * this.stateTax;
        console.log("The total price for the first purchase is: $" + calculate);
    }
}
purchase1.totalPrice()


var purchase1 = {
    shoes: 133,
    stateTax: 1.2,
    totalPrice: function() {
        var calculate = this.shoes * this.stateTax;
        console.log("The total price for the second purchase is: $" + calculate);
    }
}
purchase1.totalPrice()




// var shoes = 100;
// var stateTax = 1.2;

// function totalPrice(shoes, tax) {
//     return shoes * tax
// }

// var toPay = totalPrice(shoes, stateTax);

// console.log("You will pay the total of $" + toPay + " for the shoes");





//recursion 


function factorial(n) {   //the factorial
    if (n === 0) {
        return 1;
    } else {
        return  n * factorial(n - 1)
    }
}
console.log(factorial(5))

function recurse(x) {
    if (x > 0 && x < 40) {
        console.log(x);
        recurse(x - 1);
    }
}

recurse(30);



var counter = 3;

function myDay() {
    console.log("Eat");
    console.log("Work");
    console.log("Code");
    console.log("repeat");

    counter = counter - 1;
    if (counter > 0) {
        myDay();
    }
}

console.log(myDay());


// ===============================================================      PROGRAMMING ASSIGNMENT ================================== 
// // Task 1: Build a function-based console log message generator
// var style;
// var message;

// function consoleStyler(color, background, fontSize, txt) {
//     message = "%c" + txt;
//     style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontSize};`

//     console.log(message, style);

    
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions

// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');


// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate(color, background, fontSize, txt, reason) {
//     consoleStyler(color, background, fontSize, txt);  
//     celebrateStyler(reason);
// }

// // Call styleAndCelebrate

// styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', "champions!");

















//FUNCTIONAL PROGRAMMING

//1) first-class functions == in JS, a function is just another value that we can(pass to another function, save in a var, return from other functions)

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())




// 2) Higher-order functions == accepts other functions as arguments, returns functions when invoked.

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}


//3) pure functions == returns the exact same result as long as given the same values.

function addTwoNums(a, b) {
    console.log(a + b)
}


// oop 
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false



// scope 
var car = "Toyota Hilux";     // this function is a global variable, it can be used anywhere in this scope/file

function bestCars() {
    var first = "Ferrari";
    var second = "Lamborghini";      // this varriable is scoped to this function and is referred to as a local variable
    var third = "Bughatti";
}







// this function will return the val value and also the function call without undefined. It is like calling the console.log 
function consoleLog(val) {
    console.log(val)
    return val
}








// ERROR HANDLING 



//defensive programming 
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if (condition1 && condition2) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}
letterFinder("Mwansa", 's')



function addTwoNumbers(a, b) {
    try {
        if(typeof(a) != "number") {
            throw new ReferenceError('the first argument is not a number');
        } else if(typeof(b) != "number") {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b)
        }    
    } catch (err) {
        console.log("Error!", err);
    }
} 

addTwoNumbers(5, '5');

console.log("It still works");




//undefined type 
function test(t) {
    if (t === undefined) {
      return 'Undefined value!';
    }
    return t;
}
  
let x;
  
console.log(test(x));
// Expected output: "Undefined value!"
  

//null expression 
function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
}
  
console.log("From the null test: ", getVowels('skyeng'));

//OBJECT METHODS

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()



// OBJECTS 



//arrays as objects


function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var arrMyname = arrayBuilder("Peter", "Musonda", "Mwansa");
console.log(arrMyname);


var fruits = [];    
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']   .push()=== this adds new members to the array


fruits.pop();
console.log(fruits); // ['apple']  .pops() === removes the first member of the array


// using the bracket notation ==== 


//can evaluate expressions
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}


//with the bracket notaton, I can add spaces inside the property names.
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}



//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager.health);
assistantManager.greeting = "Let's make more money";
console.log(assistantManager.greeting);












// ARRAYS AND FUNCTIONS 

letterFinder = (word, match) => {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the ", match, "at ", i+1);
        }
        
    }
}

letterFinder("Peter", "r");












console.log("==========================");


listArrayItems = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "red") {
            console.log(i*100, "tomato");
        } else {
            console.log(i*100, arr[i]);
        }
    }
}

var arr = ["red", "orange", "green", "blue", "black"];
listArrayItems(arr);



console.log("==========================");







//THE TERNARY OPERATOR

function getFree(isMember) {
    return (isMember ? "$20.00" : "100");
}

console.log(getFree(true));
console.log(getFree(false));
console.log(getFree(null));

console.log("==========================");


var age = 64;
var beverage = age >= 18 ? "Beer" : "Taizya";
console.log(beverage);




const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };
  
console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"




//THE TRUTHY

//If the first operand is truthy, the logical AND operator returns the second operand:

//true && "dog"
// returns "dog"

//[] && "dog"
// returns "dog"




//THE FALSY
/*If the first object is falsy, it returns that object:

console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
*/




function example(day) {
    return (day = 3 ? "Tuesday"
    : 2 ? "Monday"
    : 1 ? "Sunday"
    : 4 ? "Wednesday"
    : day = 5 ? "Thursday"
    : "Invalid");
}

console.log(example(5));