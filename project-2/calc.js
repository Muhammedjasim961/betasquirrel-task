
const screen = document.getElementById('screen');


function clickBtn(value) {
    screen.value += value;
}

function clearBtn(value) {
    screen.value = "";
}

function equalTo(value) {
   screen.value = eval(screen.value);
}