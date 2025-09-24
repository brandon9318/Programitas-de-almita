document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("comentarios").addEventListener("blur", validarComentarios);
document.getElementById("password").addEventListener("blur", validarPassword);

function validarNombre() {
  const nombre = document.getElementById("nombre").value.trim();
  if (!nombre) alert("El nombre es obligatorio.");
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) alert("El email no es válido.");
}

function validarComentarios() {
  const comentarios = document.getElementById("comentarios").value.trim();
  if (!comentarios) {
    alert("Los comentarios son obligatorios.");
  } else if (comentarios.length > 50) {
    alert("Los comentarios no deben exceder los 50 caracteres.");
  }
}

function validarPassword() {
  const password = document.getElementById("password").value;
  const passwordValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);
  if (!passwordValido) {
    alert("La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número.");
  }
}


document.getElementById("registroForm").addEventListener("submit", function(e) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentarios = document.getElementById("comentarios").value.trim();
  const password = document.getElementById("password").value;
  const condiciones = document.getElementById("condiciones").checked;

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  if (!nombre || !email || !comentarios || !condiciones || !emailValido || !passwordValido || comentarios.length > 50) {
    alert("Por favor, revisa los campos. Hay errores en el formulario.");
    e.preventDefault();
  }
});


function mostrarLetraDNI() {
  const numero = parseInt(document.getElementById("dniNumero").value);
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  if (isNaN(numero) || numero < 0 || numero > 99999999) {
    document.getElementById("letraDNI").textContent = "Número de DNI inválido.";
    return;
  }
  const letra = letras[numero % 23];
  document.getElementById("letraDNI").textContent = `La letra del DNI es: ${letra}`;
}


