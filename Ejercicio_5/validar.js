document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const comentarios = document.getElementById('comentarios').value.trim();
  const password = document.getElementById('password').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const condiciones = document.getElementById('condiciones').checked;
  const errores = [];


  if (!nombre) errores.push("El nombre es obligatorio.");
  if (!email || !/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) errores.push("Email inválido.");
  if (!comentarios) errores.push("Los comentarios son obligatorios.");
  if (comentarios.length > 50) errores.push("Comentarios no deben exceder 50 caracteres.");
  if (!password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
    errores.push("La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número.");
  }
  if (!condiciones) errores.push("Debes aceptar las condiciones del servicio.");


  let edad = null;
  if (fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
  }


  const erroresDiv = document.getElementById('errores');
  const edadDiv = document.getElementById('resultadoEdad');
  erroresDiv.innerHTML = errores.length ? errores.join('<br>') : '';
  edadDiv.textContent = edad !== null && errores.length === 0 ? `Tu edad es: ${edad} años.` : '';

  if (errores.length === 0) {
    alert("Formulario enviado correctamente.");

  }
});

function eliminarScripts(html) {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}
