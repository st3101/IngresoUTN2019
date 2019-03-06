//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var notas;
    var sexo;
    var notasTotales = 0;
    var notasPromedio;
    var notaMenor;
    var notaMayor;
    var conVaronAprob = 0;
    var i = 1;
    var flag = 0;

    for (i = 1; i <= 6; i++) {

        notas = parseInt(prompt("Ingrese nota (0/10) del alumno numero " + i))

        while ((notas < 0 || notas > 10) || isNaN(notas)) {

            notas = parseInt(prompt("Error. Ingrese una nota valida del alumno numero " + i));
        }

        sexo = prompt("Ingrese el sexo (m/f) del alumono numero " + i)

        while (!(sexo == "f" || sexo == "m")) {

            sexo = prompt("Error. Ingrese el sexo (m/f) del alumono numero " + i)
        }

        //Nota Mayor no la pedia 
        if (notas > notaMayor || flag == 0) {
            notaMayor = notas;
        }
        if (notas < notaMenor || flag == 0) {
            notaMenor = notas;
            flag = 1;
        }
        if (notas >= 6 && sexo == "m") {
            conVaronAprob++;
        }

        notasTotales = notasTotales + notas;
    }
    notasPromedio = notasTotales / 6;
    document.write("Las nota promedio son " + notasPromedio + "<br>");
    document.write("La nota mayor es " + notaMayor + "<br>");
    document.write("La nota menor es " + notaMenor + "<br>");
    document.write("La cantidad de varones aprobadas es " + conVaronAprob + "<br>");

}
