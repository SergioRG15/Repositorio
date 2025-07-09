document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const forgotLink = document.getElementById("forgotLink");
  const message = document.getElementById("message");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";

    const alias = loginForm.alias.value.trim();
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    // Validar que sea un correo de Gmail
    if (!email.endsWith("@gmail.com")) {
      message.textContent = "El correo debe ser de Gmail.";
      return;
    }

    // Validación simulada (podrías conectar a un backend real aquí)
    if (email === "ejemplo@gmail.com" && password === "123456") {
      localStorage.setItem("alias", alias);
      message.style.color = "green";
      message.textContent = `¡Bienvenido, ${alias}! Redirigiendo...`;

      // Redirige simulado
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    } else {
      message.style.color = "#c0392b";
      message.textContent = "Correo o contraseña incorrectos.";
    }
  });

  forgotLink.addEventListener("click", () => {
    const email = prompt("Ingresa tu correo para recuperar tu contraseña:");
    if (email) {
      alert("Se ha enviado un enlace de recuperación a " + email);
    }
  });
});
  document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim() || 'No proporcionado';
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim() || 'No proporcionada';
    const allergies = document.getElementById('allergies').value.trim() || 'Ninguna';
    const bloodType = document.getElementById('bloodType').value;

    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      if (calculatedAge != age) {
        alert("La edad no coincide con la fecha de nacimiento. Por favor verifica.");
        return;
      }
    }

    document.getElementById('dispName').textContent = name;
    document.getElementById('dispDob').textContent = dob;
    document.getElementById('dispAge').textContent = age;
    document.getElementById('dispGender').textContent = gender;
    document.getElementById('dispPhone').textContent = phone;
    document.getElementById('dispEmail').textContent = email;
    document.getElementById('dispAddress').textContent = address;
    document.getElementById('dispAllergies').textContent = allergies;
    document.getElementById('dispBloodType').textContent = bloodType;

    document.getElementById('profileDisplay').style.display = 'block';

    // Redirigir a la calculadora IMC después de 1 segundo
    setTimeout(function () {
      window.location.href = "imc.html";
    }, 1000);
  });
  window.location.href = "imc.html";