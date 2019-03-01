//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numer1 = parseInt(prompt("Ingrese el primer numero"));
    var numer2 = parseInt(prompt("Ingrese el segundo numero"));
    var resultado

    if (numer1 == numer2) {
        resultado = numer1 * numer2;

    }
    else if (numer1 > numer2) {
        resultado = numer1 - numer2;
    }
    else { resultado = numer1 + numer2 }

    document.write("Su resultado es " + resultado);

}

