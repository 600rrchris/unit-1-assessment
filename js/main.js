 //Define variables that hold application state, cache DOM elements, etc.
const num = document.getElementById('number');
const answer = document.querySelector('h1');



// Select elements in the DOM.
let sum = 0;

// Listen for browser events, such as click, being dispatched by DOM elements.
document.getElementById('add').addEventListener('click', addNumber);
document.getElementById('subtract').addEventListener('click', subtractNumber);

// Manipulate a DOM element's content and style
init ();
function init() {
    sum ='0';
    number.value='1';
    sum = 0;
}
function render () {
    document.getElementById('final').textContent = sum
}
function addNumber (){
    sum += parseFloat(num.value);
render();
 };    
function subtractNumber (){
//   sum -= parseFloat(answer.value);
latest = document.getElementById('final');
subTotal = latest - parseFloat(answer.value);
    render();
    console.log(subTotal);
};

