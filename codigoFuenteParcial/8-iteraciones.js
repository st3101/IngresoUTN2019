//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {


    var contadorPar = 0;
    var numeroTotales = 0;
    var flag = 0;
    var numero;
    var numeroMayor;
    var numeroMenor;
    var continuar;
    var contador = 0;
    var promedio;
    do {

        numero = parseInt(prompt("Ingrese un numero positivo"));
        while (numero <= 0 || isNaN(numero)) {
            numero = parseInt(prompt("Error. Ingrese un numero positivo"))
        }

        if (numero % 2 == 0) {
            contadorPar++;
        }
        if (numero > numeroMayor || flag == 0) {
            numeroMayor = numero;
        }
        if (numero < numeroMenor || flag == 0) {
            numeroMenor = numero;
            flag = 1;
        }
        numeroTotales = numeroTotales + numero
        contador++
        continuar = prompt("Desea continuar (s/n)");
    } while (continuar == "s");

   promedio = numeroTotales / contador;
   
   document.write("La cantidad de numeros pares es " + contadorPar + "<br>");
   document.write("El promedio de todos los numeros ingresados es " + promedio + "<br>");
   document.write("La suma de todos lo numero es " + numeroTotales + "<br>");
   document.write("El numero maximo es " + numeroMayor + " y el numero minimo es " + numeroMenor);




}

