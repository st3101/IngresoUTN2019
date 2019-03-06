function mostrar() {

    var contadorPar = 0;
    var contadorIm = 0;
    var contador0 = 0
    var sumaPos = 0;
    var restaNeg = 0;
    var contador = 0;
    var flag = 0;
    var numeroMax;
    var letraMax;
    var numeroMin;
    var letraMin;
    var promedio;
    var continuar;
    do {
        var n1 = parseInt(prompt("Ingrese un numero"));

        while (n1 >= 100 || n1 <= -100) {
            n1 = parseInt(prompt("Error. ingrese un numero valido"));
        }
        var letra = prompt("Ingrese una letra");

        while (!(isNaN(letra))) {
            letra = prompt("ingrese una letra valida");
        }


        if (n1 % 2 == 0) {
            contadorPar++;
        }
        if (n1 % 2 == 1) {
            contadorIm++;
        }
        if (n1 == 0) {
            contador0++;
        }
        if (n1 > 0) {
            sumaPos = sumaPos + n1;
            contador++;
        }

        if (n1 < 0) {
            restaNeg = restaNeg + n1;
        }
        if (numeroMax < n1 || flag == 0) {
            numeroMax = n1;
            letraMax = letra;
        }
        if (numeroMin > n1 || flag == 0) {
            numeroMin = n1
            letraMin = letra
            flag = 1
        }

        continuar = prompt("Quiere ingresar otro numero (s/n)");
    } while (continuar == "s");


    promedio = sumaPos / contador;

    document.write("la cantidad de numero pares es " + contadorPar + "<br>");
    document.write("La cantidad de numero impares es " + contadorIm + "<br>");
    document.write("La cantidad de ceros es " + contador0 + "<br>");
    document.write("El promedio de los positivos es " + promedio + "<br>");
    document.write("la suma de todos los numero negativos es " + restaNeg + "<br>");
    document.write("El numero max y su letra es " + numeroMax + " " + letraMax + "<br>");
    document.write("el numero min y su lerea es " + numeroMin + " " + letraMin + "<br>");


}