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