function copiarPortapapeles(){
    var copiado = document.getElementById("idCajaDeTxt02");
    copiado.select();
    document.execCommand('copy');  

}
 
 botonCopiar.onclick = copiarPortapapeles;
