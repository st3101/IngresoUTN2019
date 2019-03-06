function mostrar()
{
    var precio = parseInt(prompt("Ingrese el precio"));
    var descuento = parseInt(prompt("Ingrese el descuento"));
    var precioFinal;

    precioFinal = precio * descuento / 100;

    document.getElementById("elPrecioFinal").value = "$" + precioFinal.toFixed(2);

}
