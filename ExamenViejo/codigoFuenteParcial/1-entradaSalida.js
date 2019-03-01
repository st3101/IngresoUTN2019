//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ 
    var lado = parseInt(document.getElementById("lado").value);

 if(lado <=0 || isNaN(lado)){
 alert("Ingrese un numero valido");
 }
 else{
     var perimetro = lado * 3;
alert(perimetro);
}
	
}

