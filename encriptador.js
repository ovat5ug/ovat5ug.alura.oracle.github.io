
var botonUno = document.querySelector("#btnEncriptarID");
var botonCopiar = document.querySelector("#btn-copy");

var encriptacionExitosa = "TEXTO ENCRIPTADO:";
var desencriptacionExitosa = "TEXTO DESENCRIPTADO:";


var si = "";
var no = "none";

function resultado(ver){
  document.getElementById("contenedor-resultado").style.display = ver;  
  document.getElementById("btn-copy").style.display = ver;
  document.getElementById("idCajaDeTxt02").style.display = ver;
}

document.getElementById("robotinhos").style.display = "";

resultado(no);

function encriptar(){
  document.getElementById("robotinhos").style.display = "none";
  var msjEncriptado = "";
  var mensaje = document.querySelector("#idCajaDeTxt01").value;
  var mayus = /[A-Z]/g;
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if(mensaje == ""){
    alert("no debe estar vacio");
    document.getElementById("robotinhos").style.display = "";
    resultado(no)
  }else if (mensaje.match(mayus) != mensaje.match(mayus)){
      alert("No puede contener mayusculas");
      document.getElementById("robotinhos").style.display = "";
  }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
      alert("no puede contener acentos ni caracteres especiales");
      document.getElementById("robotinhos").style.display = "";
  }else{
    for(var i = 0; i < mensaje.length; i++){
    if(mensaje[i] == "a"){
      var encriptando = mensaje[i].replace("a","ai",);
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "e"){
      var encriptando = mensaje[i].replace("e","enter");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "i"){
      var encriptando = mensaje[i].replace("i","imes");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "o"){
      var encriptando = mensaje[i].replace("o","ober");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "u"){
      var encriptando = mensaje[i].replace("u","ufat");
      msjEncriptado = msjEncriptado + encriptando;
  }else{
      msjEncriptado = msjEncriptado + mensaje[i];
    }
  }
      document.getElementById("titulo-resultado").innerHTML=encriptacionExitosa;
      document.getElementById("idCajaDeTxt02").innerHTML=msjEncriptado;
      document.getElementById("idCajaDeTxt01").value = "";
      resultado(si)
  }
}







botonUno.onclick = encriptar;
