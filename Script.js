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


  // Opcional limpiar formulario:
  // this.reset();
});
