//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {

    var notas
    var sexo

    for (i = 1; i <= 7; i++) {

        nota = parseInt(prompt("Ingrese una nota (0 al 10)"));
        sexo = prompt("ingrese un sexo (m/f)");

        while (nota < 0 && nota > 10 && !(sexo == "m" || sexo == "f")) {

            nota = parseInt(prompt("Erro. Ingrese una nota valida (0 al 10) "));
            sexo = prompt("Error . Ingrese un sexo valido (m/f)");
        }


    }
    alert("ekisde")
}
