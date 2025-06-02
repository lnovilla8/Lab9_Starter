class InputError extends Error {
    constructor(message) {
        super(message);
        this.name = InputError
    }
 }

window.onerror = function (message) {
    console.log("Global error");
    console.log(message);

    return true;
}
let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;

      try {
        if (operator == "/" && Number(secondNum) == 0) {
            throw new InputError("Can't divide by 0");
        }
      } catch (err) {
        console.error("Caught error", err.message);
      } finally {
        console.log("Calculated");
      }

      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
/*
    <button id="log">Console Log</button>
    <button id="error">Console Error</button>
    <button id="count">Console Count</button>
    <button id="warn">Console Warn</button>
    <button id="assert">Console Assert</button>
    <button id="clear">Console Clear</button>
    <button id="dir">Console Dir</button>
    <button id="dirxml">Console dirxml</button>
    <button id="start">Console Group Start</button>
    <button id="end">Console Group End</button>
    <button id="table">Console Table</button>
    <button id="start_timer">Start Timer</button>
    <button id="end_timer">End Timer</button>
    <button id="trace">Console Trace</button>
    <button id="global_error">Trigger a Global Error</button>
*/

document.getElementById("log").addEventListener("click", () => {
    console.log("Log message");
});

document.getElementById("error").addEventListener("click", () => {
    console.error("There is an error");
});

document.getElementById("count").addEventListener("click", () => {
    console.count();
});

document.getElementById("warn").addEventListener("click", () => {
    console.warn("Warning");
});

document.getElementById("assert").addEventListener("click", () => {
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;

    console.assert(eval(`${firstNum} ${operator} ${secondNum}`) == output.innerHTML, "The answer is wrong");
});

document.getElementById("clear").addEventListener("click", () => {
    console.clear();
});

document.getElementById("dir").addEventListener("click", () => {
    let firstNum = document.querySelector('#first-num').value;
    console.dir(firstNum);
});

document.getElementById("dirxml").addEventListener("click", () => {
    let firstNum = document.querySelector('#first-num').value;
    console.dirxml(firstNum);
});

document.getElementById("group_start").addEventListener("click", () => {
    console.group();
});

document.getElementById("group_end").addEventListener("click", () => {
    console.groupEnd();
});

document.getElementById("table").addEventListener("click", () => {
    console.table([
        { label: "Software Engineering", value: "110"},
        { label: "Operating Systems", value: "120"}
    ]);
});

document.getElementById("start_timer").addEventListener("click", () => {
    console.time();
});

document.getElementById("end_timer").addEventListener("click", () => {
    console.timeEnd();
});

document.getElementById("trace").addEventListener("click", click);

function click() {
    deep();
}

function deep() {
    deeper();
}

function deeper() {
    deepest();
}

function deepest() {
    console.trace();
}

document.getElementById("global_error").addEventListener("click", () => {
    yay;
});
