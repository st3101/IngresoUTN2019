function mostrar() {

    var nombrePais;
    var habitantes;
    var temperaturaPar = 0;
    var habitantesMin = 0;
    var paisHabitantesMin;
    var sumaDeHabitantes = 0;
    var contador = 0;
    var temperaturaMin;
    var flag = 0;
    var continuar;
    var promedio;
    var contadorPaisT40 = 0; 
    var paisConMenorTemeperatura;



    do {
        nombrePais = prompt("Ingrese el nombre del pais");
        habitantes = parseInt(prompt("Ingrese la cantidad de habitantes"));

        while (habitantes < 0 || habitantes > 7000) {
            habitantes = parseInt(prompt("Error. ingresar la cantidad de habitantes"));
        }
        var temperatura = parseInt(prompt("Ingrese una temperatura"));

        while (temperatura < -50 || temperatura > 50) {
            temperatura = parseInt(prompt("Error ingrese una temperatura valida"));
        }
        if (temperatura % 2 == 0) {
            temperaturaPar++
        }
        if (habitantesMin < habitantes || flag == 0) {
            paisHabitantesMin = nombrePais;
        }
        if (temperaturaMin > temperatura || flag == 0) {
            temperaturaMin = temperatura
            paisConMenorTemeperatura = nombrePais
            flag = 1
        }
        if (temperatura > 40) {
            contadorPaisT40++;
        }

        sumaDeHabitantes = sumaDeHabitantes + habitantes;
        contador++;

        continuar = prompt("Quiere continuar (s/n)");
    } while (continuar == "s");

    promedio = sumaDeHabitantes / contador;


    document.write("La cantidad de temperatura par es " + temperaturaPar + "<br>");
    document.write("El nombre del pais con menos habitantes es " + paisHabitantesMin + "<br>");
    document.write("La cantidad de paices que superaron 40 grados son " + contadorPaisT40 + "<br>");
    document.write("El promedio de loshabitante es " + promedio + "<br>");
    document.write("La temperatura minima y su pais es " + paisConMenorTemeperatura + " " + temperaturaMin);
}
