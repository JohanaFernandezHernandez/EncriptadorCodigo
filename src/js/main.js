const textArea = document.querySelector("#input-text");
const mensaje = document.querySelector("#output-text");
const copyButton = document.querySelector(".btn_copiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
  const mensajeEncriptado = encriptar(textArea.value);
  mensaje.value = mensajeEncriptado;
  textArea.value ="";
  mensaje.style.backgroundImage = "none";

  const screenWidth = window.innerWidth; // Definir screenWidth aquí

  if (mensajeEncriptado) {
    mensaje.style.backgroundImage = "none";
    document.getElementById("placeholder-text").style.display = "none";
    copyButton.style.display = "block";
    document.getElementById("output-text").style.display = "block" ;
  } else {
    mensaje.style.backgroundImage = (screenWidth > 1152) ? "url(../../assets/Muñeco.png)" : "none";
    document.getElementById("placeholder-text").style.display = "block";
    copyButton.style.display = "none";
  }
}

function btnDesencriptar(){
  const mensajeDesencriptado = desencriptar(textArea.value);
  mensaje.value = mensajeDesencriptado;
  textArea.value ="";

  const screenWidth = window.innerWidth; // Definir screenWidth aquí

  if (mensajeDesencriptado) {
    mensaje.style.backgroundImage = "none";
    document.getElementById("placeholder-text").style.display = "none";
    copyButton.style.display = "block";
    document.getElementById("output-text").style.display = "block" ;
  } else {
    mensaje.style.backgroundImage = (screenWidth > 1152) ? "url(../../assets/Muñeco.png)" : "none";
    document.getElementById("placeholder-text").style.display = "block";
    copyButton.style.display = "none";
  }
}

function encriptar(textoencriptado){
  let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  textoencriptado = textoencriptado.toLowerCase();

  for(let i = 0; i < llaves.length; i++){
    if(textoencriptado.includes(llaves[i][0])){
      textoencriptado = textoencriptado.replaceAll(llaves[i][0], llaves[i][1]);
    }
  }
  return textoencriptado;
}

function desencriptar(textodesencriptado){
  let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  textodesencriptado= textodesencriptado.toLowerCase();

  for(let i = 0; i < llaves.length; i++){
    if(textodesencriptado.includes(llaves[i][1])){
      textodesencriptado = textodesencriptado.replaceAll(llaves[i][1], llaves[i][0]);
    }
  }
  return textodesencriptado;

}

function copiarTexto(){
  mensaje.select();
  document.execCommand("copy");
  mensaje.value = "Mensaje copiado exitosamente";

  const screenWidth = window.innerWidth; // Definir screenWidth aquí

  setTimeout(function() {
    mensaje.value = ""; 
    mensaje.style.backgroundImage = (screenWidth > 1152) ? "url(../../assets/Muñeco.png)" : "none";
    document.getElementById("placeholder-text").style.display = "block";
    document.getElementById("output-text").style.display =(screenWidth > 1152) ? "block" : "none";
    copyButton.style.display = "none";
}, 3000); 
}


