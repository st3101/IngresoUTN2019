function Mostrar() {

    var sexo = prompt("ingrese f ó m .");

    while (!(sexo == "m" || sexo == "f")) {
        sexo = prompt("Ingrese un sexo valido (f o m)");
    }

    document.getElementById('Sexo').value = "Su sexo es " + sexo;

}//FIN DE LA FUNCIÓN