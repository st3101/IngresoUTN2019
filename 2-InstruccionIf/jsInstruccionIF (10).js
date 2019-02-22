function Mostrar() {
	var nota = Math.floor(Math.random() * 10 + 1);

	if (nota > 8) {
		alert("Exelente su nota es " + nota);
	}
	else if (nota > 3) {
		alert("Aprobo su nota es " + nota);
	}
	else if (nota) {
		alert("Vamos, la proxima se puede, su nota es " + nota)
	}
}//FIN DE LA FUNCIÓN