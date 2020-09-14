let check = false;

function setOutput(number) {
    if (check) {
        document.getElementById("out-put").value = number;
        check = false;
    } else {
        document.getElementById("out-put").value += number;
    }
}

function calculator() {
    check = true;
    let output = document.getElementById("out-put").value;
    document.getElementById("out-put").value = eval(output);
}

function clearOutput() {
    document.getElementById("out-put").value = '';
}

function clearNumber() {
    let output = document.getElementById("out-put").value;
    console.log(output)
}
