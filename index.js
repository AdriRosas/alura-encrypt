const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

/**
La función valida si el texto ingresado en un área de texto solo contiene letras minúsculas sin 
acentos. Devuelve un valor booleano de "verdadero" si el texto de entrada contiene caracteres 
que no sean letras minúsculas sin acentos, e "indefinido" si el texto de entrada es válido. 
 */
function validarTexto() {
  let textoEscrito = document.querySelector(".text-area").value;
  let validador = textoEscrito.match(/^[a-z]*$/);

  if (!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
  }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

/**
* La función encriptar toma una cadena y reemplaza ciertas vocales con los códigos correspondientes 
de una matriz. 
stringEncriptada: una cadena que debe cifrarse con un código específico. 
return devuelve la cadena de entrada con ciertas vocales reemplazadas por los códigos correspondientes 
de la matriz `matrizCodigo`.
 */
function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

/**
La función desencriptar toma una cadena y reemplaza ciertas palabras codificadas con sus 
letras correspondientes. 
El parámetro "stringDesencriptada" es una cadena que representa un mensaje cifrado que debe 
descifrarse utilizando una matriz de código específica. 
La función "desencriptar" toma esta cadena cifrada como entrada y devuelve la cadena descifrada.
return devuelve la cadena de entrada después de descifrarla utilizando 
la matriz de códigos proporcionada.
 */
function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}
