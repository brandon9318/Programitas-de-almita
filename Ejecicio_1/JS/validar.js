document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioInversion');
    const capitalInput = document.getElementById('capital');
    const tasaInteresInput = document.getElementById('tasaInteres');
    const periodoMesesInput = document.getElementById('periodoMeses');
    const resultadoDiv = document.getElementById('resultado');
    const capitalInicialSpan = document.getElementById('capitalInicial');
    const gananciaObtenidaSpan = document.getElementById('gananciaObtenida');
    const montoTotalSpan = document.getElementById('montoTotal');
    const botonLimpiar = document.getElementById('limpiar');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const capital = parseFloat(capitalInput.value);
        const tasaInteres = parseFloat(tasaInteresInput.value) / 100;
        const periodoMeses = parseInt(periodoMesesInput.value);

        if (isNaN(capital) || capital <= 0) {
            alert('Por favor, ingresa un capital válido y mayor que cero.');
            return; 
        }
        if (isNaN(tasaInteres) || tasaInteres < 0) {
            alert('Por favor, ingresa una tasa de interés válida y no negativa.');
            return;
        }
        if (isNaN(periodoMeses) || periodoMeses < 1) {
            alert('Por favor, ingresa un número de meses válido y mayor que cero.');
            return;
        }
        
        const montoFinal = capital * Math.pow((1 + tasaInteres), periodoMeses);
        const ganancia = montoFinal - capital;

        capitalInicialSpan.textContent = `$${capital.toFixed(2)}`;
        gananciaObtenidaSpan.textContent = `$${ganancia.toFixed(2)}`;
        montoTotalSpan.textContent = `$${montoFinal.toFixed(2)}`;
        resultadoDiv.style.display = 'block';
    });
    
    botonLimpiar.addEventListener('click', function() {
        formulario.reset(); 
        resultadoDiv.style.display = 'none'; 
    });
});