function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir a metros

    const resultado = document.getElementById('resultado');
    const categoriaTexto = document.getElementById('categoria');
    const botonSiguiente = document.getElementById('btn-siguiente');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor ingresa valores válidos.';
        categoriaTexto.textContent = '';
        botonSiguiente.style.display = 'none'; // Oculta si error
        return;
    }

    const imc = peso / (altura * altura);
    resultado.textContent = `Tu IMC es: ${imc.toFixed(2)}`;

    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad';
    }

    categoriaTexto.textContent = `Categoría: ${categoria}`;

    // ✅ Mostrar el botón cuando se haya calculado el IMC correctamente
    botonSiguiente.style.display = 'inline-block';
}
