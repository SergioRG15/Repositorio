const form = document.getElementById('healthForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const edad = parseInt(document.getElementById('edad').value);
    const condicion = document.getElementById('condicion').value;
    let recomendaciones = [];

    if (isNaN(edad) || edad <= 0) {
        resultDiv.innerHTML = `
            <p style="color: red;">Por favor, ingresa una edad válida y positiva.</p>
        `;
        resultDiv.style.display = 'block';
        return;
    } else if (edad > 120) {
        resultDiv.innerHTML = `
            <p style="color: red;">Por favor, ingresa una edad válida y lógica.</p>
        `;
        resultDiv.style.display = 'block';
        return;
    }

    if (condicion === 'diabetes') {
        recomendaciones.push("Evita azúcares simples y controla los carbohidratos.");
        recomendaciones.push("Realiza caminatas diarias de al menos 30 minutos.");
        recomendaciones.push("Chequea tu glucosa con regularidad.");
    } else if (condicion === 'hipertension') {
        recomendaciones.push("Reduce la sal y alimentos procesados.");
        recomendaciones.push("Monitorea tu presión arterial regularmente.");
        recomendaciones.push("Practica técnicas de relajación como respiración profunda.");
    } else if (condicion === 'obesidad') {
        recomendaciones.push("Adopta una dieta balanceada rica en vegetales.");
        recomendaciones.push("Haz ejercicio al menos 3 veces por semana.");
        recomendaciones.push("Evita comidas altas en grasa saturada.");
    } else {
        recomendaciones.push("Mantén una alimentación equilibrada.");
        recomendaciones.push("Haz actividad física regularmente.");
        recomendaciones.push("Consulta con tu médico al menos una vez al año.");
    }

    if (edad > 60) {
        recomendaciones.push("Realiza chequeos preventivos frecuentes.");
        recomendaciones.push("Incluye suplementos como vitamina D si el médico lo indica.");
    }

    resultDiv.innerHTML = `
        <h3>Recomendaciones personalizadas:</h3>
        <ul>
            ${recomendaciones.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
    resultDiv.style.display = 'block';
});
  