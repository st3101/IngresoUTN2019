//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    flag = 0;
    var importeMayor;
    var importeMenor;

    for (var i = 1; i <= 7; i++) {

        var importe = parseInt(prompt("Ingrese la nota del alumno " + i));

        while (importe <= 0 || isNaN(importe) ) {
            importe = parseInt(prompt("Erro. Ingrese un importe valido"));
        }
        if (flag == 0 || importeMayor < importe) {
            importeMayor = importe;
        }
        if(flag == 0 || importeMenor > importe)
        importeMenor = importe;
        flag = 1;
    }
alert("La nota mayor es " + importeMayor + " Y la importe menor es " + importeMenor);
}