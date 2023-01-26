const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copy = document.querySelector(".copiar");

function validar() {
    mensaje.innerHTML = "";
    let listaValida = "abcdefghijklmnopqrstuvwxyz ";
    textoInicial = textArea.value;
    if (textoInicial != "") {
        for (let letra of textoInicial) {
            if (!listaValida.includes(letra)) {
                alert(" Sólo minúsculas, sin acento ni carácters especiales");
                return false;
            }
        }
        return true;
    } else {
        alert("Introduzca mensaje");
    }
}

function btnEncriptar(){
    if(validar()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        document.querySelector(".avisos").style.visibility='hidden';
        document.querySelector(".copiar").style.display='block';
    }
}
    
function encriptar(stringEncriptada){
    let matrizCodigo = [["e",'enter'],["i","imes"],["a","ai"],["o",'over'],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    texto = textArea

    for (let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    if(validar()){
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e",'enter'],["i","imes"],["a","ai"],["o",'over'],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){

            stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function clipboard(){
    const memsaje = document.querySelector(".mensaje");
    navigator.clipboard.writeText(mensaje.value);
}