function mostrar() {
    var pais;
    var habitantes;
    var temperatura;
    var contadorTemperaturaPar = 0;
    var contadorTemperaturaMayor40 = 0;
    var temperaturaMenor;
    var flag = 0;
    var paisMenorHabitante;
    var habitanteMenor;
    var paisMenortemperatura;
    var continuar;
    var sumahabitantes = 0;
    var contadorhabitantes = 0;
    var promedioHabitante;
    do {
        pais = prompt("Ingrese el pais");
        habitantes = parseInt(prompt("Ingrese la cantidad de habitante"));
        while (habitantes > 7000 || habitantes < 1) {
            habitantes = parseInt(prompt("Error ingrese la cantidad de habitante"));
        }
        temperatura = parseInt(prompt("Ingrese temperatura"));
        while (temperatura > 50 || temperatura < -50) {
            temperatura = parseInt(prompt("Error ingrese una temperatura"))
        }
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }
        if (temperatura > 40) {
            contadorTemperaturaMayor40++;
        }
        if (habitantes < habitanteMenor || flag == 0) {
            habitanteMenor = habitantes;
            paisMenorHabitante = pais;
        }
        if (temperatura < temperaturaMenor || flag == 0) {
            temperaturaMenor = temperatura
            paisMenortemperatura = pais;
            flag = 1;
        }

        sumahabitantes = sumahabitantes + habitantes;
        contadorhabitantes++;

        continuar = prompt("Quiere continuar?");
    } while (continuar == "s")

    promedioHabitante = sumahabitantes / contadorhabitantes;

    document.write("La cantidad de temperaturas pares es " + contadorTemperaturaPar + "<br>")
    document.write("El pais con menor cantidada de habitantes es " + paisMenorHabitante + "<br>")
    document.write("La cantidad de paises que superan los 40 grados son " + contadorTemperaturaMayor40 + "<br>")
    document.write("El promedio de los habitaante es " + promedioHabitante + "<br>")
    document.write("El pais con menor temperatura es " + paisMenortemperatura + " y su temperatura es " + temperaturaMenor + "<br>")

}
