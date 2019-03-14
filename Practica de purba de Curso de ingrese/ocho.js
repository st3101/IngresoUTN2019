function mostrar() {
    var n1;
    var letra;
    var contador0 = 0;
    var contadorPar = 0;
    var contadorImpar = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var numeroMaximo;
    var letraMaxima;
    var numeroMinimo;
    var letraMinima;
    var flag = 0;
    var contadorImpar;
    var promedioPositivos;
    var contadorPositivos = 0;

    do {
        n1 = parseInt(prompt("Ingrese un numero"));

        while (n1 > 100 || n1 < -100) {
            n1 = parseInt(prompt("Error ingrese un numero"));
        }

        letra = prompt("Ingrese una letra")

        if (n1 == 0) {
            contador0++;
        }
        else {
            if (n1 % 2 == 0) {
                contadorPar++;
            }
            else {
                contadorImpar++;
            }
            if (n1 > 0) {
                sumaPositivos = sumaPositivos + n1;
                contadorPositivos++;
            }
            else {
                sumaNegativos = sumaNegativos + n1;
            }
        }
        if (n1 > numeroMaximo || flag == 0) {
            numeroMaximo = n1;
            letraMaxima = letra;
        }
        if (n1 < numeroMinimo || flag == 0) {
            numeroMinimo = n1;
            letraMinima = letra;
            flag = 1;
        }

        continuar = prompt("Quiere continuar");
    } while (continuar == "s");

    promedioPositivos = sumaPositivos / contadorPositivos;

    document.write("La cantidad de numero pares es " + contadorPar + "<br>");
    document.write("La cantidad de numero impares es " + contadorImpar + "<br>");
    document.write("La cantida de numero ceros es " + contador0 + "<br>");
    document.write("El promedio de los numero positivos es " + promedioPositivos + "<br>");
    document.write("La suma de todos los numero negativos es " + sumaNegativos + "<br>");
    document.write("El numero maximo y su letra es " + numeroMaximo + " " + letraMaxima + "<br>");
    document.write("El numero minimo y su letra es " + numeroMinimo + " " + letraMinima + "<br>");

}
