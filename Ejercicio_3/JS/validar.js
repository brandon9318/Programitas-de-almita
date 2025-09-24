function validarFormulario(event) {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const condiciones = document.getElementById('condiciones');

    let esValido = true;

    //aqui me quedeeeeeeeee maña en la mañanaaaa
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

 
    if (nombre.value.trim() === '') {
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
        esValido = false;
    }

   
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === '') {
        document.getElementById('errorEmail').textContent = 'El email es obligatorio.';
        esValido = false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById('errorEmail').textContent = 'El email no es válido.';
        esValido = false;
    }


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (password.value.length < 6) {
        document.getElementById('errorPassword').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        esValido = false;
    } else if (!passwordRegex.test(password.value)) {
        document.getElementById('errorPassword').textContent = 'La contraseña debe contener al menos una mayúscula, una minúscula y un dígito.';
        esValido = false;
    }
    

    if (!condiciones.checked) {
        document.getElementById('errorCondiciones').textContent = 'Debes aceptar las condiciones del servicio.';
        esValido = false;
    }

   
    if (esValido) {
        const totalCompra = 100; 
        const descuento = totalCompra * 0.15;
        const totalFinal = totalCompra - descuento;
        alert(`¡Formulario enviado con éxito! El total de tu compra es $${totalCompra}. Con un descuento del 15% ($${descuento}), el total a pagar es $${totalFinal.toFixed(2)}.`);
    } else {
        event.preventDefault(); 
    }

    return esValido;
}


function sanitizeHTML(htmlString) {
    const scriptRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
    return htmlString.replace(scriptRegex, '');
}


const textoPeligroso = 'Hola <script>alert("¡Peligro!");</script> mundo.';
const textoLimpio = sanitizeHTML(textoPeligroso);
console.log(textoLimpio); 