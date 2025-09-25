console.log("=== EJERCICIO 2 - FUNDAMENTOS DE JAVASCRIPT ===");

console.group('Variables');

var variable1;
let variable2;
const variable3 = 2;

var $jquery = "jQuery", _private = "privado";

//declaraciones case sensitive
var variable = 2;
var VARIABLE = 5;

//camelCase vs snake_case
var camelCase = 2;
var snake_case = 3;

//comportamiento de var vs let
console.log("Antes de declarar con var:", mVariable); // undefined
var mVariable = 2;
console.log("Después de declarar con var:", mVariable); // 2

let miOtraVariable = 2;
console.log("Declarado con let:", miOtraVariable);

//const debe inicializarse
const estoNoDaraProblemas = 42;
console.log("Constante:", estoNoDaraProblemas);

console.groupEnd();

console.group('Tipos de datos');

//Undefined
console.log("typeof undefined:", typeof undefined);
let variableSinValor;
console.log("variable sin valor:", typeof variableSinValor);

//object
console.log("typeof null:", typeof null);
console.log("typeof objeto:", typeof { key: 2 });
console.log("typeof array:", typeof [15, 4]);
console.log("typeof Date:", typeof new Date());

//Boolean
console.log("typeof true:", typeof true);
console.log("typeof Boolean:", typeof new Boolean(true));

// String
console.log('typeof "hola":', typeof "hola");

//Function
console.log("typeof function:", typeof function(){});

//Number
console.log("typeof 1:", typeof 1);
console.log("typeof 1.3:", typeof 1.3);
console.log("typeof NaN:", typeof NaN);
console.log("typeof Infinity:", typeof Infinity);

//Symbol
console.log("typeof Symbol():", typeof Symbol());
console.log("typeof Symbol('mi simbolo'):", typeof Symbol("mi simbolo"));

console.groupEnd();

console.group('Aritmética');

const suma = 1 + 2;
const resta = 3 - 2;
const producto = 2 * 4;
const division = 9 / 3;
const potencia = 3 ** 2;
const modulo = 8 % 3;

console.log("1 + 2 =", suma);
console.log("3 - 2 =", resta);
console.log("2 * 4 =", producto);
console.log("9 / 3 =", division);
console.log("3 ** 2 =", potencia);
console.log("8 % 3 =", modulo);

const concatenarStrings = "Hola" + " " + "mundo" + "!";
const sumaStringYNumero = 1 + "1";
const banana = "b" + "a" + +"a" + "a";

console.log('"Hola" + " " + "mundo" =', concatenarStrings);
console.log('1 + "1" =', sumaStringYNumero);
console.log('"b" + "a" + +"a" + "a" =', banana);

console.groupEnd();

console.group('Precedencia de operadores');

const expression1 = (3 + 7) * 10;
const expression2 = 3 + 7 * 10;
const expression3 = 2 ** 3 ** 2;

console.log("(3 + 7) * 10 =", expression1);
console.log("3 + 7 * 10 =", expression2);
console.log("2 ** 3 ** 2 =", expression3);

let inicio = 5;
const sumaYAsigna = ++inicio;
const asignaYSuma = inicio++;
const restaYAsigna = --inicio;
const asignaYResta = inicio--;

console.log("inicio = 5");
console.log("++inicio =", sumaYAsigna);
console.log("inicio++ =", asignaYSuma);
console.log("--inicio =", restaYAsigna);
console.log("inicio-- =", asignaYResta);
console.log("valor final de inicio:", inicio);

let x = 1;
let y = 2;
let z = 3;

console.log("x =", x, "y =", y, "z =", z);
x = y;
console.log("x = y → x =", x);
x += z;
console.log("x += z → x =", x);
x *= y;
console.log("x *= y → x =", x);
x /= y;
console.log("x /= y → x =", x);
x %= x;
console.log("x %= x → x =", x);

console.groupEnd();

console.group('Operadores logicos');

const verdadero = true;
const falso = false;

console.log("true && true =", verdadero && verdadero);
console.log("false && true =", falso && verdadero);
console.log("true && false =", verdadero && falso);
console.log("false && false =", falso && falso);

console.log("true || true =", verdadero || verdadero);
console.log("false || true =", falso || verdadero);
console.log("true || false =", verdadero || falso);
console.log("false || false =", falso || falso);

console.log("!true =", !verdadero);
console.log("!false =", !falso);

console.groupEnd();

console.group('Operadores de comparacion');

console.log("100 > 50 =", 100 > 50);
console.log("50 < 100 =", 50 < 100);
console.log("100 >= 100 =", 100 >= 100);
console.log("100 <= 100 =", 100 <= 100);
console.log('100 == "100" =', 100 == "100");
console.log("100 === 100 =", 100 === 100);
console.log('100 !== "100" =', 100 !== "100");

//ejemplos adicionales
console.log('1 == "1" =', 1 == '1');
console.log('1 === "1" =', 1 === '1');
console.log("false == 0 =", false == 0);
console.log("false === 0 =", false === 0);
console.log('"" == 0 =', '' == 0);
console.log('"" === 0 =', '' === 0);

console.groupEnd();

console.group('Control de flujo');

//if/else
const numeroEjemplo = 5;

if (numeroEjemplo < 5) {
    console.log("El número es menor que 5");
} else if (numeroEjemplo > 5) {
    console.log("El número es mayor que 5");
} else {
    console.log("¡El número es exactamente 5!");
}

//switch
const dia = "Martes";

switch(dia) {
    case "Lunes":
        console.log("Hoy es lunes, ¡ánimo!");
        break;
    case "Martes":
        console.log("Martes, la semana avanza");
        break;
    case "Miércoles":
        console.log("¡Mitad de semana!");
        break;
    case "Jueves":
        console.log("Jueves, casi viernes");
        break;
    case "Viernes":
        console.log("¡Viernes!");
        break;
    default:
        console.log("Es fin de semana");
}

//while
let contador = 0;
console.log("Contador con while:");
while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}

//for
console.log("Contador con for:");
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
}

console.log("For con múltiples variables:");
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i = ${i}, j = ${j}`);
}

console.groupEnd();

// Mostrar resultados en la pagina
document.getElementById('resultados').innerHTML = `
    <div class="resultado">
        <h3>Resultados del Ejercicio 2</h3>
        <p>Revisa la consola para ver todos los resultados detallados.</p>
        <p>Operaciones matemáticas:</p>
        <ul>
            <li>3 + 7 * 10 = ${expression2}</li>
            <li>2 ** 3 ** 2 = ${expression3}</li>
            <li>8 % 3 = ${modulo}</li>
        </ul>
    </div>
`;