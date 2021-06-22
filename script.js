const contraEl = document.getElementById("contra");
const copiarEl = document.getElementById("copiar");
const lonEl = document.getElementById("lon");
const mayusEl = document.getElementById("mayus");
const minusEl = document.getElementById("minus");
const numeroEl = document.getElementById("numero");
const simboloEl = document.getElementById("simbolo");
const generarEl = document.getElementById("generar");

const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+=";

function getMinusculas() {
    return minusculas[Math.floor(Math.random() * minusculas.length)];
}

function getMayusculas() {
    return mayusculas[Math.floor(Math.random() * mayusculas.length)];
}

function getNumeros() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getSimbolos() {
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}

function generarContra() {
    const lon = lonEl.value;

    let contrasena = "";

    if (mayusEl.checked) {
        contrasena += getMayusculas();
    }

    if (minusEl.checked) {
        contrasena += getMinusculas();
    }

    if (numeroEl.checked) {
        contrasena += getNumeros();
    }

    if (simboloEl.checked) {
        contrasena += getSimbolos();
    }

    for (let i = contrasena.length; i < lon; i++) {
        const x = generarX();
        contrasena += x;
    }

    contraEl.innerText = contrasena;
}

function generarX() {
    const xs = [];
    if (mayusEl.checked) {
        xs.push(getMayusculas());
    }

    if (minusEl.checked) {
        xs.push(getMinusculas());
    }

    if (numeroEl.checked) {
        xs.push(getNumeros());
    }

    if (simboloEl.checked) {
        xs.push(getSimbolos());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generarEl.addEventListener("click", generarContra);

copiarEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const contrasena = contraEl.innerText;

    if (!contrasena) {
        return;
    }

    textarea.value = contrasena;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Contraseña copiada al portapapeles!");
});