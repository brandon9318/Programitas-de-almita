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


function calcularUtilidad() {
  const salario = parseFloat(document.getElementById("salario").value);
  const antiguedad = parseFloat(document.getElementById("antiguedad").value);
  let porcentaje = 0;

  if (antiguedad < 1) {
    porcentaje = 0.05;
  } else if (antiguedad < 2) {
    porcentaje = 0.07;
  } else if (antiguedad < 5) {
    porcentaje = 0.10;
  } else if (antiguedad < 10) {
    porcentaje = 0.15;
  } else {
    porcentaje = 0.20;
  }

  const utilidad = salario * porcentaje;
  document.getElementById("resultadoUtilidad").textContent = `Utilidad anual: $${utilidad.toFixed(2)}`;
}
