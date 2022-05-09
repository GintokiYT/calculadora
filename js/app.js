const output = document.querySelector('.output');
const input = document.querySelector('.input');

const cero = document.querySelector('.cero');
const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const tres = document.querySelector('.tres');
const cuatro = document.querySelector('.cuatro');
const cinco = document.querySelector('.cinco');
const seis = document.querySelector('.seis');
const siete = document.querySelector('.siete');
const ocho = document.querySelector('.ocho');
const nueve = document.querySelector('.nueve');

const punto = document.querySelector('.punto');
const suma = document.querySelector('.suma');
const resta = document.querySelector('.resta');
const multiplicacion = document.querySelector('.multiplicacion');
const division = document.querySelector('.division');
const igual = document.querySelector('.igual');

const borrar = document.querySelector(".clear");

// Numeros
cero.addEventListener('click', () => {
    input.innerHTML += '0';
});
uno.addEventListener('click', () => {
    input.innerHTML += '1';
});
dos.addEventListener('click', () => {
    input.innerHTML += '2';
});
tres.addEventListener('click', () => {
    input.innerHTML += '3';
});
cuatro.addEventListener('click', () => {
    input.innerHTML += '4';
});
cinco.addEventListener('click', () => {
    input.innerHTML += '5';
});
seis.addEventListener('click', () => {
    input.innerHTML += '6';
});
siete.addEventListener('click', () => {
    input.innerHTML += '7';
});
ocho.addEventListener('click', () => {
    input.innerHTML += '8';
});
nueve.addEventListener('click', () => {
    input.innerHTML += '9';
});

// Validar un solo punto
punto.addEventListener('click', () => {
    if (input.innerHTML.indexOf('.') === -1) {
        input.innerHTML += '.';
    }
});

// Eliminar todo
borrar.addEventListener('click', () => {
    input.innerHTML = '';
    output.innerHTML = '';
});

// Sumar
suma.addEventListener('click', () => {
    if (output.innerHTML.slice(-1) === '+'){
        return;
    } 
    else if(output.innerHTML.indexOf('+') === -1 || output.innerHTML.indexOf('-') === -1 || 
        output.innerHTML.indexOf('x') === -1 || output.innerHTML.indexOf('/') === -1) {
        output.innerHTML = '';
    }
    
    output.innerHTML += `${input.innerHTML} + `;
    input.innerHTML = '';
});

// Restar
resta.addEventListener('click', () => {
    if (output.innerHTML.slice(-1) === '-'){
        return;
    } 
    else if(output.innerHTML.indexOf('+') === -1 || output.innerHTML.indexOf('-') === -1 || 
        output.innerHTML.indexOf('x') === -1 || output.innerHTML.indexOf('/') === -1) {
        output.innerHTML = '';
    }
    
    output.innerHTML += `${input.innerHTML} - `;
    input.innerHTML = '';
});

// Multiplicar
multiplicacion.addEventListener('click', () => {
    if (output.innerHTML.slice(-1) === 'x'){
        return;
    } 
    else if(output.innerHTML.indexOf('+') === -1 || output.innerHTML.indexOf('-') === -1 || 
        output.innerHTML.indexOf('x') === -1 || output.innerHTML.indexOf('/') === -1) {
        output.innerHTML = '';
    }
    
    output.innerHTML += `${input.innerHTML} x `;
    input.innerHTML = '';
});

// Dividir
division.addEventListener('click', () => {
    if (output.innerHTML.slice(-1) === '/'){
        return;
    } 
    else if(output.innerHTML.indexOf('+') === -1 || output.innerHTML.indexOf('-') === -1 || 
        output.innerHTML.indexOf('x') === -1 || output.innerHTML.indexOf('/') === -1) {
        output.innerHTML = '';
    }
    
    output.innerHTML += `${input.innerHTML} / `;
    input.innerHTML = '';
});

// Igual
igual.addEventListener('click', () => {
    
    // Evaluar
    output.innerHTML += `${input.innerHTML}`;
    const resultado = () =>{
        const operacion =  output.innerHTML.replace('x', '*');
        if(operacion === Number.POSITIVE_INFINITY || operacion == Number.NEGATIVE_INFINITY){
            return '0';
        }
        return eval(operacion); 
    };
    input.innerHTML = resultado();

    if (output.innerHTML.indexOf('+') === -1 || output.innerHTML.indexOf('-') === -1 || 
        output.innerHTML.indexOf('x') === -1 || output.innerHTML.indexOf('/') === -1) {
        output.innerHTML = '';
    }
        
});