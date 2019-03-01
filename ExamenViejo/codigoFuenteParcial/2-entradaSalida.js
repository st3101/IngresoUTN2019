//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio = parseInt(prompt("Ingrese el precio"));
    var iva
    var precioF
 while(precio <=0 || isNaN(precio)){
 prompt("Error .Ingrese un precio valido");
 }
 
iva = precio * 0.21;
precioF = precio + iva;
document.getElementById("importe").value = "El precio final mas el IVA 21% es " + precioF;
}


