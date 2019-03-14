/*Bienvenidos (SOLO SWITCH). 
una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de dias , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es america tiene un 50% de descuento y si ademas paga por debito se le agrega un 10% mas de descuento 
Si es africa tiene un 60% de descuento y si ademas paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es europa tiene un 20% de descuento y si ademas paga por debito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%*/

function mostrar() {
    var continente = document.getElementById("Continente").value;
    var medioDePago = document.getElementById("MedioDePago").value;
    var dias = parseInt(prompt("Ingrese los dias"));
    var precioBruto = dias * 100;
    var texto = "descuento";
    var descuento;
    var precioTotal;

    switch (continente) {
        case "América":
            switch (medioDePago) {
                case "Débito":
                    descuento = 60;
                    break;
                default:
                    descuento = 50;
                    break;
            }
            break;

        case "África":
            switch (medioDePago) {
                case "MercadoPago":
                    descuento = 75;
                    break;
                default:
                    descuento = 60;
                    break;
            }
            break;

        case "Europa":
            switch (medioDePago) {
                case "Débito":
                    descuento = 35;
                    break;
                case "MercadoPago":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
                    break
            }

        default:
            descuento = -20;
            texto = "aumento";
            break;
    }

    precioTotal = precioBruto - precioBruto * descuento / 100;

    alert("Precio sin " + texto + " es " + precioBruto + ", el descuento es " + descuento + "%, el precio con descuento es " + precioTotal);


}
