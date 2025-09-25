console.log("=== EJERCICIO 3 - FUNCIONES Y ALGORITMOS ===");

function ordenar(arr) {
    const nuevoArray = [...arr];
    
    for (let i = 0; i < nuevoArray.length; i++) {
        for(let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}

const arrayDesordenado = [14, 23, 99, 874, 93, 121];
const arrayOrdenado = ordenar(arrayDesordenado);

console.log("Array original:", arrayDesordenado);
console.log("Array ordenado:", arrayOrdenado);

function esPar(numero) {
    return numero % 2 === 0;
}

console.log("¿7 es par?", esPar(7));
console.log("¿8 es par?", esPar(8));
console.log("¿0 es par?", esPar(0));
console.log("¿-4 es par?", esPar(-4));

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        
        if (altura >= alturaDeseada) { 
            return dias; 
        }
        
        altura -= velocidadDecrecimiento;
        
        if (altura < 0) altura = 0;
    }
    return dias;
}

const prueba1 = calcularDiasCrecimiento(5, 2, 10);  // 3 días
const prueba2 = calcularDiasCrecimiento(3, 1, 8);   // 4 días
const prueba3 = calcularDiasCrecimiento(10, 1, 15); // 2 días

console.log("Prueba crecimiento (5,2,10):", prueba1, "días");
console.log("Prueba crecimiento (3,1,8):", prueba2, "días");
console.log("Prueba crecimiento (10,1,15):", prueba3, "días");

document.getElementById('resultados').innerHTML = `
    <div class="resultado">
        <h3>Resultados del Ejercicio 3</h3>
        
        <div class="ejercicio">
            <h4>1. Ordenar Array</h4>
            <p><strong>Array original:</strong> [${arrayDesordenado.join(', ')}]</p>
            <p><strong>Array ordenado:</strong> [${arrayOrdenado.join(', ')}]</p>
        </div>
        
        <div class="ejercicio">
            <h4>2. Verificar Número Par</h4>
            <p><strong>¿7 es par?</strong> ${esPar(7)}</p>
            <p><strong>¿8 es par?</strong> ${esPar(8)}</p>
            <p><strong>¿0 es par?</strong> ${esPar(0)}</p>
        </div>
        
        <div class="ejercicio">
            <h4>3. Cálculo de Días de Crecimiento</h4>
            <p><strong>Velocidad: 5cm/día, Decrecimiento: 2cm/noche, Altura deseada: 10cm</strong></p>
            <p><strong>Días necesarios:</strong> ${prueba1} días</p>
            <p><strong>Velocidad: 3cm/día, Decrecimiento: 1cm/noche, Altura deseada: 8cm</strong></p>
            <p><strong>Días necesarios:</strong> ${prueba2} días</p>
        </div>
    </div>
`;