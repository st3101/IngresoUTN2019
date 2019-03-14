function mostrar() {
    var altura;
    var sexo;
    var promedioDeAlturas;
    var SumaDeAltura = 0;
    var AlturaMin;
    var sexoMin;
    var flag = 0
    var contadorMujeres190 = 0;

    for (var i = 0; i < 5; i++) {

        altura = parseInt(prompt("Ingrese la altura"));
        
        while (altura > 250 || altura < 0) {
            altura = parseInt(prompt("Error ingrese la altura"));
        }

        sexo = prompt("Ingrese el sexo");

        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Error ingre un sexo");
        }

        SumaDeAltura = SumaDeAltura + altura;

        if (altura < AlturaMin || flag == 0) {
            AlturaMin = altura;
            sexoMin = sexo;
            flag = 1
        }
        if (altura > 190 && sexo == "f") {
            contadorMujeres190++;
        }
    }
    promedioDeAlturas = SumaDeAltura / 5;

    alert("Promedio de alturas " + promedioDeAlturas);
    alert("La altura mas baja y el sexo mas bajo " + AlturaMin + " " + sexoMin);
    alert("La cantidad de mujeres que superar 190cm " + contadorMujeres190);
}
