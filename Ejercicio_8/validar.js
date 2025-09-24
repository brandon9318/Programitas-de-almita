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


function calcularHorasExtras() {
  const horas = parseFloat(document.getElementById("horasTrabajadas").value);
  const pagoHora = parseFloat(document.getElementById("pagoHora").value);
  let total = 0;

  if (horas <= 40) {
    total = horas * pagoHora;
  } else {
    const extras = horas - 40;
    if (extras <= 8) {
      total = (40 * pagoHora) + (extras * pagoHora * 2);
    } else {
      const dobles = 8;
      const triples = extras - 8;
      total = (40 * pagoHora) + (dobles * pagoHora * 2) + (triples * pagoHora * 3);
    }
  }

  document.getElementById("resultadoPago").textContent = `Total a pagar: $${total.toFixed(2)}`;
}



