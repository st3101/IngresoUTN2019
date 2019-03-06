function mostrar() {

    var contador = 0;
    var promedio;
    var sumaAltura = 0;
    var alturaMin;
    var sexoAlturaMin;
    var flag = 0;
    var contadorAltura = 0;

    for (var i = 1; i <= 5; i++) {

        var altura = parseInt(prompt("ingrese la altura"));

        while (altura < 0 || altura > 250) {

            altura = parseInt(prompt("Error. ingrese la altura"));
        }
        var sexo = prompt("ingrese el sexo");

        while (!(sexo == "m" || sexo == "f")) {
            sexo = prompt("Erro. ingrese el sexo");
        }

        if (alturaMin < altura || flag == 0) {
            alturaMin = altura;
            sexoAlturaMin = sexo;
            flag = 1
        }

        if (altura > 120 && sexo == "f") {
            contadorAltura++
        }

        sumaAltura = sumaAltura + altura;

        contador++
    }
    promedio = sumaAltura / contador
   
    alert("Promedio de altura = " + promedio);
    alert("La altura mas baja = " + alturaMin + " y su sexo es " + sexoAlturaMin);
    alert("La cantidad de mujeres que supera 190 c = " + contadorAltura);
}