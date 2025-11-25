// Función para validar el login
function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  // Obtener los valores del formulario
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Clave estática para la demo
  const CLAVE_SECRETA = "ok";

  // Realizar la verificación
  if (password.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido " + email);

    // Opcional: Guardar el email en sessionStorage para usar en otras páginas
    sessionStorage.setItem("userEmail", email);

    // Redirige a tu página principal
    window.location.href = "LP.html";
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
    document.getElementById("password").focus();
  }

  return false;
}

// Añadir efecto de enter en los inputs
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (input, index) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && index < inputs.length - 1) {
        e.preventDefault();
        inputs[index + 1].focus();
      }
    });
  });
});
