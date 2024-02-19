function showInfo() {
    document.getElementById("myPhoto").style.opacity = "1";
    document.getElementById("textInfo").style.opacity = "1";
}

function hideInfo() {
    document.getElementById("myPhoto").style.opacity = "0";
    document.getElementById("textInfo").style.opacity = "0";
}




//------------------ Завдання 1 ------------------

function showInput(shape) {
    const inputFields = document.getElementById("inputFields");
    inputFields.innerHTML = "";

    if (shape === "circle") {
        inputFields.innerHTML = '<label for="radius">Радіус:</label><input type="number" id="radius"> ';
    } else if (shape === "rectangle") {
        inputFields.innerHTML = '<label for="width">Ширина:</label><input type="number" id="width"><label for="height">Висота:</label><input type="number" id="height">';
    } else if (shape === "triangle") {
        inputFields.innerHTML = '<label for="base">Основа:</label><input type="number" id="base"><label for="height">Висота:</label><input type="number" id="height">';
    }
}

function calculateArea() {
    const shape = document.getElementById("shape").value;
    let area;

    if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        area = Math.PI * radius * radius;
    } else if (shape === "rectangle") {
        const width = parseFloat(document.getElementById("width").value);
        const height = parseFloat(document.getElementById("height").value);
        area = width * height;
    } else if (shape === "triangle") {
        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);
        area = 0.5 * base * height;
    }

    document.getElementById("result").textContent = "Площа фігури:" + area.toFixed(2);
}

document.getElementById("shape").addEventListener("change", function () {
    const selectedShape = this.value;
    showInput(selectedShape);
});

showInput("circle"); 

//------------------ Завдання 2 ------------------
function generatePassword() {
    const passwordLength = document.getElementById("passwordLength").value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById("password").textContent = "Згенерований пароль: " + password;
}
//------------------ Завдання 3 ------------------
function countWords() {
    let text = document.getElementById("text").value;
    let trimmedText = text.trim();
    let wordsArray = trimmedText.split(/\s+/);
    let wordCount = wordsArray.length;
    document.getElementById("wordCount").textContent = "Кількість слів:" + wordCount;
}
