// script.js

function insert(num) {
    document.form1.answer.value += num;
}

function equal() {
    try {
        document.form1.answer.value = eval(document.form1.answer.value);
    } catch (e) {
        document.form1.answer.value = "Error";
    }
}

function clean() {
    document.form1.answer.value = "";
}

function back() {
    document.form1.answer.value = document.form1.answer.value.slice(0, -1);
}
