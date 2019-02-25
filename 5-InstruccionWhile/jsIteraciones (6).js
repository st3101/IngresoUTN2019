function Mostrar() {
	var i = 0;
	var acumulador = 0;
	var acumuladorC = 0;
  
	while (i < 5) {
	acumulador = parseInt(prompt("Ingrese 5 numeros"));
	acumuladorC = acumuladorC + acumulador
    i = i + 1
	}


	 
	document.getElementById('suma').value = acumuladorC;
	document.getElementById('promedio').value = acumuladorC / 5;

}//FIN DE LA FUNCIÓN