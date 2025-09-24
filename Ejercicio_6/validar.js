// Validación del formulario
document.getElementById("miFormulario").addEventListener("submit", function(e) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentarios = document.getElementById("comentarios").value.trim();
  const password = document.getElementById("password").value;
  const condiciones = document.getElementById("condiciones").checked;

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  if (!nombre || !email || !comentarios) {
    alert("Todos los campos son obligatorios.");
    e.preventDefault();
    return;
  }

  if (!emailValido) {
    alert("El email no es válido.");
    e.preventDefault();
    return;
  }

  if (comentarios.length > 50) {
    alert("Los comentarios no deben exceder los 50 caracteres.");
    e.preventDefault();
    return;
  }

  if (!passwordValido) {
    alert("La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número.");
    e.preventDefault();
    return;
  }

  if (!condiciones) {
    alert("Debes aceptar las condiciones del servicio.");
    e.preventDefault();
    return;
  }
});

// Función palabrasANumeros
function palabrasANumeros(arr) {
  const mapa = {
    "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4,
    "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
  };
  return arr.map(palabra => mapa[palabra.toLowerCase()] ?? -1);
}

function ejecutarConversion() {
  const entrada = document.getElementById("entradaPalabras").value;
  const palabras = entrada.split(",").map(p => p.trim());
  const resultado = palabrasANumeros(palabras);
  document.getElementById("resultadoPalabras").textContent = resultado.join(", ");
}

// Expresión regular para eliminar etiquetas <script>
function eliminarScriptTags(html) {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
}
