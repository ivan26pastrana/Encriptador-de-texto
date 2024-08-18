let textoAEncriptar;
let textoADesencriptar;
let textoEncriptado;
let textoDesencriptado;
const botonCopiar = document.querySelector(".boton__copiar");

let numeroElegidor = 0; // el 1 pertenece al encriptador y el 2 al desencriptador

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function captarTextoParaEncriptar(){
    asignarTextoElemento('.aviso__desencriptador'," El mensaje encriptado es:");
    textoAEncriptar = document.getElementById("textoACaptar").value;
    let textoNormalizado = textoAEncriptar.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    textoEncriptado = encriptadorDeTexto(textoNormalizado);
    asignarTextoElemento('.texto__encriptado__mensaje', textoEncriptado);
    botonCopiar.style.visibility = "inherit";
    numeroElegidor = 1;
    limpiarCopiado();
    limpiarCaja();
    let elementoHTML = document.querySelector('.texto__encriptado__mensaje').style.height = ("355px");
    let elementoHTML2 = document.querySelector('.texto__encriptado').style.height = ("720px");
    let imagen = document.querySelector('.imagen__robot').style.visibility = "hidden";
    let  elementoHTML3 = document.querySelector('.texto__encriptado__mensaje').style.visibility= "visible";
}

function captarTextoParaDesencriptar(){
    asignarTextoElemento('.aviso__desencriptador'," El mensaje desencriptado es:");
    textoADesencriptar = document.getElementById("textoACaptar").value;
    let textoNormalizado = textoADesencriptar.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    textoDesencriptado = desencriptadorDeTexto(textoNormalizado);
    asignarTextoElemento('.texto__encriptado__mensaje',textoDesencriptado);
    botonCopiar.style.visibility = "inherit";
    numeroElegidor = 2;
    limpiarCopiado();
    limpiarCaja();
    let elementoHTML = document.querySelector('.texto__encriptado__mensaje').style.height = ("355px");
    let elementoHTML2 = document.querySelector('.texto__encriptado').style.height = ("720px");
    let imagen = document.querySelector('.imagen__robot').style.visibility = "hidden";
    let  elementoHTML3 = document.querySelector('.texto__encriptado__mensaje').style.visibility= "visible";
}

function reemplazarLetras(texto,letrasaliente,letraentrante){
    nuevotexto = texto.replaceAll(letrasaliente,letraentrante);
    return nuevotexto;
}

function encriptadorDeTexto( texto_para_encriptar){
    let textoFinal = texto_para_encriptar;
    textoFinal = textoFinal.replace(/e/mg, "enter");
    textoFinal = textoFinal.replace(/i/mg, "imes");
    textoFinal = textoFinal.replace(/a/mg, "ai");
    textoFinal = textoFinal.replace(/o/mg, "ober");
    textoFinal = textoFinal.replace(/u/mg, "ufat");
    
    
    return textoFinal;
}

function desencriptadorDeTexto( texto_para_encriptar){
    let textoFinal = texto_para_encriptar;
    textoFinal = textoFinal.replace(/enter/mg, "e");
    textoFinal = textoFinal.replace(/imes/mg, "i");
    textoFinal = textoFinal.replace(/ai/mg, "a");
    textoFinal = textoFinal.replace(/ober/mg, "o");
    textoFinal = textoFinal.replace(/ufat/mg, "u");
    
    
    return textoFinal;
}

function limpiarCaja(){
    let valorCaja = document.getElementById("textoACaptar");
    valorCaja.value = '';
}

function copiarTexto(){
    if(numeroElegidor == 1){
        let copiar = textoEncriptado;
        navigator.clipboard.writeText(copiar);
        botonCopiar.textContent = "Copiado!";
    }
    else if(numeroElegidor == 2){
        let copiar = textoDesencriptado;
        navigator.clipboard.writeText(copiar);
        botonCopiar.textContent = "Copiado!";
    }
   
}

function limpiarCopiado(){
    navigator.clipboard.writeText("");
    botonCopiar.textContent = "Copiar";
}







