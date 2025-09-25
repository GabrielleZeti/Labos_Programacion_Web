console.log("=== EJERCICIO 1 - USO DE LA CONSOLA ===");

console.assert("Legolas" > "Gimli", "Legolas debería ser mayor que Gimli alfabéticamente");

console.dir(window);

console.dirxml(document.body);

const marvel = ['Spider Man', 'Iron Man', 'Captain America', 'Lobezno'];

//permite agrupar diferentes valores
console.group('Superhéroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();

console.groupCollapsed('Superhéroes (grupo colapsado)');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();

