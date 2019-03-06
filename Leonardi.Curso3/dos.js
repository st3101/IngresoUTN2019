function mostrar() {
    var nombre1 = prompt("Ingrese su nombre");
    var nombre2 = prompt("Ingrese el nombre de su pareja");

    var peso1 = parseInt(prompt("Ingrese su peso (en Kilos)"));
    var peso2 = parseInt(prompt("Ingrese el peso de su pareja (en kilos)"));
    var pesoFinal;
    var promedio;

    pesoFinal = peso1 + peso2
    promedio = pesoFinal / 2

 alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + pesoFinal + " kilos y el promedio de peso " + promedio);
}
