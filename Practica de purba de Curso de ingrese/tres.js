function mostrar() {
    
    var precio = parseInt(prompt("ingrese el precio"));
    var descuento = parseInt(prompt("Ingrese el descuento"));
    var resultadoTotal;

    resultadoTotal = precio - precio * descuento / 100;

    alert("El precio final con el descuento es " + resultadoTotal);
}
