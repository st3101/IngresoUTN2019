//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var ventas;
    var i = 0;
    var mayor;
    var menor;
    var flag = 0;
    var diaMay
    var diaMen

    for (i = 1; i <= 7; i++) {

        ventas = parseInt(prompt("Ingrese Importe del dia " + i))

        while (ventas < 0 || isNaN(ventas)) {

            ventas = parseInt(prompt("Error .Ingrese Importe del dia " + i))
        }

        if (ventas > mayor || flag == 0) {
            mayor = ventas;
            diaMay = i
        }

        if (ventas < menor || flag == 0) {
            menor = ventas
            flag = 1;
            diaMen = i
        }
    }
    alert("El mayor importe fue " + mayor + " el dia " + diaMay);
    alert("el menor importe fue " + menor + " el dia " + diaMen);
}