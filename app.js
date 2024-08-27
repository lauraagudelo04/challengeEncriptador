
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desEncriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desEncriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

document.getElementById('inputText').addEventListener('input', function (event) {
    const warningMessage = document.getElementById('warningMessage');
    const inputText = event.target.value;

    const invalidChars = /[A-ZÁÉÍÓÚÑ0-9!@#$%^&*(),.?":{}|<>[\]¨{}¿+]/;


    if (invalidChars.test(inputText)) {
        warningMessage.style.color = 'red';
        event.target.value = inputText.toLowerCase().replace(/[^a-z\s]/g, '');
    } else {
        warningMessage.style.color = 'black';
    }
});

document.getElementById('btnCopiar').addEventListener('click', function () {
    const outputText = document.getElementById('outputText');

    outputText.select();
    outputText.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } catch (err) {
        alert('No se pudo copiar el texto');
    }
});