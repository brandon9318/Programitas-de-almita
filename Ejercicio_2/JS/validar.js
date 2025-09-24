document.addEventListener('DOMContentLoaded', function() {
    const sueldoForm = document.getElementById('sueldoForm');
    if (sueldoForm) {
        sueldoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
            const venta1 = parseFloat(document.getElementById('venta1').value);
            const venta2 = parseFloat(document.getElementById('venta2').value);
            const venta3 = parseFloat(document.getElementById('venta3').value);
            const resultadoDiv = document.getElementById('resultadoSueldo');

            if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
                resultadoDiv.innerHTML = `<p class="error">Por favor, introduce valores numéricos válidos.</p>`;
                return;
            }

            const totalVentas = venta1 + venta2 + venta3;
            const comisiones = totalVentas * 0.10;
            const sueldoTotal = sueldoBase + comisiones;

            resultadoDiv.innerHTML = `
                <p><strong>Comisiones (10%):</strong> $${comisiones.toFixed(2)}</p>
                <p><strong>Sueldo Total del Mes:</strong> $${sueldoTotal.toFixed(2)}</p>
            `;
        });
    }

    const validacionForm = document.getElementById('validacionForm');
    const mensajeError = document.getElementById('mensajeError');
    if (validacionForm) {
        validacionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            mensajeError.innerHTML = '';
            let errores = [];

            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const comentarios = document.getElementById('comentarios').value.trim();
            const condiciones = document.getElementById('condiciones').checked;

            if (!nombre || !email || !password || !comentarios) {
                errores.push('Todos los campos son obligatorios.');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                errores.push('La dirección de email no es válida.');
            }

            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
            if (password && !passRegex.test(password)) {
                errores.push('La contraseña debe tener al menos 6 caracteres, una minúscula, una mayúscula y un dígito.');
            }

            if (!condiciones) {
                errores.push('Debes aceptar las condiciones del servicio.');
            }

            if (errores.length > 0) {
                mensajeError.classList.remove('success');
                mensajeError.classList.add('error');
                errores.forEach(error => {
                    const p = document.createElement('p');
                    p.textContent = `❌ ${error}`;
                    mensajeError.appendChild(p);
                });
            } else {
                mensajeError.innerHTML = '<p>✅ ¡Formulario enviado con éxito!</p>';
                mensajeError.classList.remove('error');
                mensajeError.classList.add('success');
                validacionForm.reset();
            }
        });
    }

    const comentariosTextarea = document.getElementById('comentarios');
    const contadorDiv = document.getElementById('contador');
    if (comentariosTextarea && contadorDiv) {
        comentariosTextarea.addEventListener('input', function() {
            const longitud = this.value.length;
            contadorDiv.textContent = `${longitud}/50`;
        });
    }
});