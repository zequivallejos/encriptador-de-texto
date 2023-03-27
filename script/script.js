/*
e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat


amarillo --> aimairillo
amairillo --> aimesmaimesrimesllo
aimesmaimesrimesllo --> aimesmaimesrimesllober

aimesmaimesrimesllober =! aimairimesllober

*/

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas -- e E
    //g es para toda la linea u oracion
    //m es para que afete a multiples lineas o parrafo
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById('right__img').style.display = "none";
    document.getElementById("right__texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayusculas como minusculas -- e E
    //g es para toda la linea u oracion
    //m es para que afete a multiples lineas o parrafo
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("right__img").style.display = "none";
    document.getElementById("right__texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("SE COPIO!");
}
