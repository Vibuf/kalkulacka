//tlačítka
function getNumber(cisla) {
    var input_var = document.getElementById('input');
    switch (cisla) {
        case 1:
            input_var.value += '1';
            break;
        case 2:
            input_var.value += '2';
            break;
        case 3:
            input_var.value += '3';
            break;
        case 4:
            input_var.value += '4';
            break;
        case 5:
            input_var.value += '5';
            break;
        case 6:
            input_var.value += '6';
            break;
        case 7:
            input_var.value += '7';
            break;
        case 8:
            input_var.value += '8';
            break;
        case 9:
            input_var.value += '9';
            break;
        case 0:
            input_var.value += '0';
            break;
    }
}

//matematické operace
function getOperand(operace){
    var input_var = document.getElementById('input');
switch (operace) {
    case '+':
        input_var.value += '+';
        break;
    case '-':
        input_var.value += '-';
        break;
    case 'x':
        input_var.value += '*';
        break;
    case '/':
        input_var.value += '/';
        break;
    case '+/-':
        input_var.value += '-' + input_var.value;
        break;
}
}

//mazání screenu
function clearScreen() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

//backspace
function backspace(){
    var input_var = document.getElementById('input');
    var x = input_var.value;
    if (x.length > 0){
        x = x.substring(0, x.length-1);
        input_var.value = x;
    }
}

//rovná se
function compute(){
    var input_var= document.getElementById('input');
    ans = Math.floor(+eval(input_var.value));
    document.getElementById('answer').value = '=' +ans;
}

//závorky
var i = 0;
function brackets(){
    var input_var = document.getElementById('input');
    if (i == 0){
        input_var.value += '(';
        i=1;
    }
    else if(i == 1){
        input_var.value += ')';
        i=0;
    }
    
}