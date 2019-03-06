//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var precio = parseInt(prompt("Ingrese el precio"));
    var precioFinal
    var iva;

    iva = precio * 0.21;
    precioFinal = precio + iva;

    document.getElementById("importe").value = "El precio mas el IVA es de " + precioFinal;
}


