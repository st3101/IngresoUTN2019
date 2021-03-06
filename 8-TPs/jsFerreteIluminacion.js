/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

function CalcularPrecio() {

    var cantidad
    var precio
    var precioTotal;
    var descuento
    var marca;
    var iibb
    var iibbFinal

    cantidad = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

    precio = cantidad * 35;

    if (cantidad >= 6) {

        descuento = precio / 2;
    }
    else if (cantidad == 5 && marca == "ArgentinaLuz") {

        descuento = precio * 0.4;
    }
    else if (cantidad == 5 && marca != "ArgentinaLuz") {

        descuento = precio * 0.3;
    }
    else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {

        descuento = precio * 0.25;
    }
    else if (cantidad == 4 != (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {

        descuento = precio * 0.2;
    }
    else if (cantidad == 3 && marca == "ArgentinaLuz") {
        descuento = precio * 0.15;
    }
    else if (cantidad == 3 && marca == "FelipeLamparas") {
        descuento = precio * 0.1;
    }
    else if (cantidad == 3 != (marca == "ArgentinaLuz" && marca == "FelipeLamparas")) {
        descuento = precio * 0.05;
    }
    
    precioTotal = precio - descuento
    if(precioTotal >= 120){
        iibb = precioTotal * 0.1;
        iibbFinal = precioTotal - iibb
        alert("IIBB Usted pago $" + precioTotal + " siendo $" + iibbFinal + " el impuesto que se pagó");
    }
    
    document.getElementById("precioDescuento").value = precioTotal.toFixed(2);
}
