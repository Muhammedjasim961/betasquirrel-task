
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('Increment');
const resetBtn = document.getElementById('Reset');
const decrementBtn = document.getElementById('Decrement');

let counterValue = 0;

incrementBtn.addEventListener('click', function (event) {
    counterValue += 1
    counter.innerHTML = counterValue   
})
resetBtn.addEventListener('click', function (event) {
    counterValue = 0;
    counter.innerHTML = counterValue
})
decrementBtn.addEventListener('click', function (event) {
    counterValue -= 1
    counter.innerHTML = counterValue
})

   


