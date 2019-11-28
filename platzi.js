var vp = document.getElementById("villaplatzi");
var lienzo = vp.getContext("2d");


// los Jason :v
var vaca = {
    url: "vaca.png",
    CargaOK: false
};

var fondo = {
    url: "tile.png",
    CargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    CargaOK: false
};

var pollo = {
    url: "pollo.png",
    CargaOK: false
};

//creando objetos de las imagenes 
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarfondo);


vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarvaca);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarcerdo);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarpollo);

//creando sus funciones
function cargarfondo() {
    fondo.CargaOK = true;
    dibujar();
}

function cargarvaca() {
    vaca.CargaOK = true;
    dibujar();
}

function cargarcerdo() {
    cerdo.CargaOK = true;
    dibujar();
}

function cargarpollo() {
    pollo.CargaOK = true;
    dibujar();
}

var ite = 0;
var cantidad_vacas = aleatorios(1, 5);
var cantidad_cerdo = aleatorios(1, 5);
var cantidad_pollo = aleatorios(1, 5);

function dibujar() {
    if (fondo.CargaOK) {
        lienzo.drawImage(fondo.objeto, 0, 0);
    }
    if (vaca.CargaOK) {

        console.log("Candidad de vacas: " + parseInt(cantidad_vacas));
        for (var i = 0; i < cantidad_vacas; i++) {
            var x = aleatorios(0, 4);
            var y = aleatorios(0, 4);
            var x = x * 80;
            var y = y * 80;
            lienzo.drawImage(vaca.objeto, x, y);

        }
    }

    if (cerdo.CargaOK) {
        for (var i = 0; i < cantidad_cerdo; i++) {
            var x = aleatorios(0, 4);
            var y = aleatorios(0, 4);
            var x = x * 80;
            var y = y * 80;
            lienzo.drawImage(cerdo.objeto, x, y);
        }
    }

    if (pollo.CargaOK) {
        for (var i = 0; i < cantidad_pollo; i++) {
            var x = aleatorios(0, 4);
            var y = aleatorios(0, 4);
            var x = x * 80;
            var y = y * 80;
            lienzo.drawImage(pollo.objeto, x, y);
        }
    }

}




function aleatorios(min, max) {
    var alea;
    alea = Math.floor(Math.random() * (max - min + 1)) + min;
    return alea;
}