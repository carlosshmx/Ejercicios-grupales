let operacion = document.querySelector(".operacion");
let display = document.querySelector(".display");
let previa = document.querySelector(".previa");

let operador;
let numero;
let resultado;

function setearNumero(num){
    if(num.textContent === "."){
        if(display.innerHTML.includes(".")){
            return
        }
    }
    display.innerHTML += num.textContent

    if(numero && operador){
        previa.innerHTML = `${numero}${operador}${parseFloat(display.textContent)}`
    }



}

function setearOperador(op){
    operacion.innerHTML = op.textContent;
    operador = op.textContent
    if(isNaN(parseFloat(display.textContent))){
        return
    }
    numero = parseFloat(display.textContent)
    display.innerHTML = "&nbsp";
    
}

function igual(){
    if(isNaN(parseInt(display.textContent)) || !numero){
        return
    }
    switch(operador){
        case "+": resultado = numero + parseFloat(display.textContent) 
        break
        case "-": resultado = numero - parseFloat(display.textContent) 
        break
        case "x": resultado = numero * parseFloat(display.textContent) 
        break
        case "/": resultado = numero / parseFloat(display.textContent) 
        break
    }
    display.innerHTML = resultado
    numero = undefined
    operador = undefined
    operacion.innerHTML = "&nbsp"
}

function borrar(){
    display.innerHTML = "&nbsp";
    previa.innerHTML = "&nbsp";
}