// '{"Greeting" : "Hello"}'
// '{"Greeting" : "Hello"}'

// const jsonStr = {"greeting" : "Hello"}

// JSON.parse(jsonStr);

// const aPlainObj = JSON.parse(jsonStr);

// aPlainObj.Greeting = "Hi";

// aPlainObj;




function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);





const data = {
    fName: "Peter",
    lName: "Mwansa",
    greeting: "Hello",
}
const stringified = JSON.stringify(data)

console.log(stringified);
