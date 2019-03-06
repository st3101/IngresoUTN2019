//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var n1 = parseInt(prompt("Ingrese el primer numero"));
    var n2 = parseInt(prompt("Ingrese el segundo numero"));
    var resultado;

    if (n1 == n2) {
        resultado = n1 * n2;
    }
    else if (n1 > n2) {
        resultado = n1 - n2;
    }
    else {
        resultado = n1 + n2;
    }
    document.write("El resultado es " + resultado);
}

