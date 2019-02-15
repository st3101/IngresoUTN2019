function Mostrar() {

    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
        alert("adulto")
    }

    else if (edad >= 13 && edad <= 17) {
        alert("adolescente");
    }

    else {
        alert("Niño")
    }
}








