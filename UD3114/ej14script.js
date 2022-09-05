
const input = document.getElementById("input");
input.readOnly = true;
const prev = document.getElementById("prev");
let replaceLast = false;
let replaceAll = false;


function setInput(text) {
    input.value = text;
}

function setPrev(text) {
    prev.innerHTML = text;
}

function retr() {
    if (input.value.length > 1 || input.value != "0") {
        if (input.value.charAt(input.value.length - 2) === ".") {
            setInput(input.value.slice(0, -2));
        } else {
            setInput(input.value.slice(0, -1));
            if (input.value === "" || input.value === "-") {
                setInput("0");
            }
        }
    }
}

function ce() {
    setInput("0");
}

function c() {
    setInput("0");
    setPrev("&nbsp;");
}

function signoOperacion(signo){
    if (!replaceAll) {                   
        operar(buscarSimbolo());
    } 
    setPrev(input.value + " "+signo+" ");
    replaceAll = true;
    replaceLast = false;
}

function raiz() {
    setPrev("√" + input.value);
    setInput(Math.sqrt(input.value));
    replaceAll = true;
    replaceLast = false;
}

function inv() {
    setPrev("1/(" + input.value + ")");
    setInput(1 / input.value);
    replaceAll = true;
    replaceLast = false;
}

function sign() {
    if (input.value != "0") {
        if (input.value.search(/-/) === -1) {
            setInput("-" + input.value);
        } else {
            setInput(input.value.replace(/-/, ""));
        }
    }

}

function dot() {
    if (input.value.search(/\./) === -1) {
        setInput(input.value + ".0");
        replaceLast = true;
    }

}

function eq() {
    if (prev.innerHTML.search(/\=/) != -1) {                             //Si es operacion repetida
        let num = prev.innerHTML.split(" ")[2];                         //guardar el input previo
        setPrev(input.value + " " + prev.innerHTML.split(" ")[1] + " ");    //ej. "50 + 5 =" ===> "55 +" (para que funcione bien el operar() )
        setInput(num);                                                  //poner el input previo en el input para operar
        operar(buscarSimbolo());
    } else {
        operar(buscarSimbolo());
    }
}

function num(num) {
    if (num === "0" && input.value === "0") {       //si hay un 0 y clicas al 0 otra vez; para que no salga un 00
        //nada
    } else if (replaceLast || (num != "0" && input.value === "0")) {    //Reemplazar el input ej. 0 ==> 4
        setInput(input.value.slice(0, -1));
        setInput(input.value + num);
        replaceLast = false;
        replaceAll = false;
    } else if (replaceAll) {                                            //Reemplazar todo, operacion nueva
        if (prev.innerHTML.search("=") != -1) {
            setPrev("&nbsp;");                                          //poner un caracter invisible en label para mantener formato
        }
        setInput(num);
        replaceAll = false;
    } else {
        setInput(input.value + num);
    }
}

function operar(operacio) {
    switch (operacio) {
        case "+":
            setPrev(prev.innerHTML + input.value + " =");
            setInput(+prev.innerHTML.split(" ")[0] + +input.value);
            replaceAll = true;
            break;
        case "-":
            setPrev(prev.innerHTML + input.value + " =");
            setInput(+prev.innerHTML.split(" ")[0] - +input.value);
            replaceAll = true;
            break;
        case "*":
            setPrev(prev.innerHTML + input.value + " =");
            setInput(+prev.innerHTML.split(" ")[0] * +input.value);
            replaceAll = true;
            break;
        case "/":
            setPrev(prev.innerHTML + input.value + " =");
            setInput(+prev.innerHTML.split(" ")[0] / +input.value);
            replaceAll = true;
            break;
        case "%":
            setPrev(prev.innerHTML + input.value + " =");
            setInput(+prev.innerHTML.split(" ")[0] % +input.value);
            replaceAll = true;
            break;
    }
}

function buscarSimbolo() {
    if (prev.innerHTML.search(/\+/) != -1) {
        return "+";
    } else if (prev.innerHTML.search(/\-/) != -1) {
        return "-";
    } else if (prev.innerHTML.search(/\*/) != -1) {
        return "*";
    } else if (prev.innerHTML.search(/\//) != -1) {
        return "/";
    } else if (prev.innerHTML.search(/\%/) != -1) {
        return "%";
    }
}