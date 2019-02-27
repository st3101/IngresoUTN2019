function Mostrar() {

	var llave;

	var acumuladorNeg = 0;
	var canNeg = 0;
	var promNeg
	var acumuladorPos = 0;
	var canPos = 0;
	var promPos
	var diferencia
	var can0 = 0;
	var conPar = 0

	do {
		numero = parseInt(prompt("ingrese un numero"));

		if (numero <= -1) {
			acumuladorNeg = acumuladorNeg + numero;
			canNeg = canNeg + 1;
		}
		if (numero >= 1) {
			acumuladorPos = acumuladorPos + numero;
			canPos = canPos + 1
		}
		if (numero == 0) {
			can0 = can0 + 1;
		}
		if (numero % 2 == 0) {
			conPar = conPar + 1;
		}

		llave = prompt("Quiere continuar (S/N)").toLowerCase();
	} while (llave == "s")

	promNeg = acumuladorNeg / canNeg;
	promPos = acumuladorPos / canPos;
	diferencia = acumuladorPos - (-acumuladorNeg);

	document.write("1-Suma de los negativos " + acumuladorNeg + "<br>");
	document.write("2-Suma de los positivos " + acumuladorPos + "<br>");
	document.write("3-Cantidad de positivos " + canPos + "<br>");
	document.write("4-Cantidad de negativos " + canNeg + "<br>");
	document.write("5-Cantidad de ceros." + can0 + "<br>");
	document.write("6-Cantidad de números pares " + conPar + "<br>");
	document.write("7-Promedio de positivos " + promPos + "<br>");
	document.write("8-Promedios de negativos." + promNeg + "<br>");
	document.write("9-Diferencia entre positivos y negativos, (positvos-negativos) " + diferencia + "<br>");







}//FIN DE LA FUNCIÓN