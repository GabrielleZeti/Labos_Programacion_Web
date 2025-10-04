const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    }],
    get precioTotal() {
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++) {
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    }
}

console.log("EJERCICIO 2 CARRITO DE COMPRAS");
console.log("Productos en el carrito:", carrito.productos);
console.log("Precio total calculado:", carrito.precioTotal);

console.log("*Detalles de productos*");
carrito.productos.forEach((producto, index) => {
    console.log(`Producto ${index + 1}:`);
    console.log(`  Nombre: ${producto.nombre}`);
    console.log(`  Unidades: ${producto.unidades}`);
    console.log(`  Precio unitario: $${producto.precio}`);
    console.log(`  Subtotal: $${producto.unidades * producto.precio}`);
});