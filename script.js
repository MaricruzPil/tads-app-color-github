const mainCard = document.getElementById("mainCard");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

// Actualiza el color cuando se usan los sliders
function updateFromSliders() {
    redNum.value = red.value;
    greenNum.value = green.value;
    blueNum.value = blue.value;
    applyColor(red.value, green.value, blue.value);
}

// Actualiza el color cuando se escriben valores numéricos
function updateFromInputs() {
    red.value = clamp(redNum.value);
    green.value = clamp(greenNum.value);
    blue.value = clamp(blueNum.value);
    applyColor(red.value, green.value, blue.value);
}

// Aplica el color al cuadro y muestra RGB y HEX
function applyColor(r, g, b) {
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;

    const hex = "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    hexValue.textContent = hex.toUpperCase();

    // Degradado tenue para la tarjeta
    const lightColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
    const lighterColor = `rgba(${r}, ${g}, ${b}, 0.05)`;

    mainCard.style.background = `
        linear-gradient(135deg, ${lightColor}, ${lighterColor})
    `;
}


// Limita valores entre 0 y 255
function clamp(value) {
    value = Number(value);
    if (isNaN(value)) return 0;
    return Math.min(255, Math.max(0, value));
}

// Eventos
red.addEventListener("input", updateFromSliders);
green.addEventListener("input", updateFromSliders);
blue.addEventListener("input", updateFromSliders);

redNum.addEventListener("input", updateFromInputs);
greenNum.addEventListener("input", updateFromInputs);
blueNum.addEventListener("input", updateFromInputs);

// Inicialización
red.value = green.value = blue.value = 0;
updateFromSliders();
