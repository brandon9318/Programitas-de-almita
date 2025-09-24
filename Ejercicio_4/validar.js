document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculoForm');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const parcial1 = parseFloat(document.getElementById('parcial1').value);
        const parcial2 = parseFloat(document.getElementById('parcial2').value);
        const parcial3 = parseFloat(document.getElementById('parcial3').value);
        const examenFinal = parseFloat(document.getElementById('examenFinal').value);
        const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

        // Validar que los campos no estén vacíos y sean números válidos
        if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examenFinal) || isNaN(trabajoFinal)) {
            resultadoDiv.textContent = 'Por favor, ingresa calificaciones válidas en todos los campos.';
            resultadoDiv.style.color = 'red';
            return;
        }

        // Validar que las calificaciones estén en el rango de 0 a 10
        const calificaciones = [parcial1, parcial2, parcial3, examenFinal, trabajoFinal];
        const esValido = calificaciones.every(calif => calif >= 0 && calif <= 10);

        if (!esValido) {
            resultadoDiv.textContent = 'Las calificaciones deben estar entre 0 y 10.';
            resultadoDiv.style.color = 'red';
            return;
        }

        // Calcular el promedio de los parciales
        const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;

        // Calcular la calificación final con los porcentajes
        const calificacionFinal = 
            (promedioParciales * 0.55) + 
            (examenFinal * 0.30) + 
            (trabajoFinal * 0.15);

        // Mostrar el resultado
        resultadoDiv.textContent = `La calificación final en Algoritmos es: ${calificacionFinal.toFixed(2)}`;
        resultadoDiv.style.color = 'green';
    });
});