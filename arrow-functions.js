
//THE ARROW FUNCTION EXPRESSION
//they cannot be used as methods though
//cannot expressed as a constructor



//using arrow functions
// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr2 = [5, 6, 13, 0, 1, 18, 23];

const sum = arr2.reduce((a, b) => a + b);
// 66

const even = arr2.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr2.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// More concise promise chains
promise
  .then((a) => {
    // …
})
  .then((b) => {
    // …
});

// Parameterless arrow functions that are visually easier to parse
setTimeout(() => {
  console.log("I happen sooner");
  setTimeout(() => {
    // deeper code
    console.log("I happen later");
  }, 1);
}, 1);



//Traditional function 
(function (a) {
    return a + 100;
});

// 3. Remove the parameter parentheses
a => a + 100;



// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
});

// Arrow function
(a, b) => {
    const chuck = 42;
    return a + b + chuck;
};







//==================== USING SELECTORS ==================

//you can also use negation with selectors
const el = document.querySelector(
  "div.user-panel:not(.main) input[name='login']"
);




// ===================== EVENTS =========================

// Note: The addEventListener() method is the recommended way to register an event listener. 
// The benefits are as follows:

// It allows adding more than one handler for an event. This is particularly useful for libraries, 
// JavaScript modules, or any other kind of code that needs to work well with other libraries or extensions.
// In contrast to using an onXYZ property, it gives you finer-grained control of the phase when 
// the listener is activated (capturing vs. bubbling).
// It works on any event target, not just HTML or SVG elements.

// The method addEventListener() works by adding a function, 
// or an object that implements EventListener, to the list of event listeners for the specified event type 
// on the EventTarget on which it's called. If the function or object is already in the list of event listeners for this target, 
// the function or object is not added a second time.

//SYNTAX
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)



// Add a simple listener
// This example demonstrates how to use addEventListener() to watch for mouse clicks on an element.

// HTML
// <table id="outside">
//   <tr>
//     <td id="t1">one</td>
//   </tr>
//   <tr>
//     <td id="t2">two</td>
//   </tr>
// </table>

// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeThree = t2.firstChild.nodeValue === "three";
  t2.firstChild.nodeValue = isNodeThree ? "two" : "three";
}

// Add event listener to table
const ell = document.getElementById("outside");
el.addEventListener("click", modifyText, false);      // one two




// Add an abortable listener
// This example demonstrates how to add an addEventListener() that can be aborted with an AbortSignal.

// HTML
// <table id="outside">
//   <tr>
//     <td id="t1">one</td>
//   </tr>
//   <tr>
//     <td id="t2">two</td>
//   </tr>
// </table>
// Add an abortable event listener to table
const controller = new AbortController();
const elll = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// Function to change the content of t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
    controller.abort(); // remove listener after value reaches "three" and the value changes because there is no more listener listening.
  }
} // one two





// Event listener with an arrow function
// This example demonstrates a simple event listener implemented using arrow function notation.

// HTML
// <table id="outside">
//   <tr>
//     <td id="t1">one</td>
//   </tr>
//   <tr>
//     <td id="t2">two</td>
//   </tr>
// </table>
// Function to change the content of t2
function modifyText(new_text) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = new_text;
}

// Add event listener to table with an arrow function
const el = document.getElementById("outside");
el.addEventListener(
  "click",
  () => {
    modifyText("four");
  },
  false
);