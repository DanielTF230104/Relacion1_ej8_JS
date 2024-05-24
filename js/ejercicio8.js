function calcularMCD() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0) {
        alert('Por favor, ingrese números enteros positivos válidos.');
        return;
    }

    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    document.getElementById('resultado').textContent = `El MCD es: ${num1}`;
}