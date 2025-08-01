function register() {
  const username = document.getElementById('regUsername').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;
   const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const msgBox = document.getElementById('registerMsg');

  if (!username || !email || !phone || !password || !confirmPassword) {
    msgBox.innerText = "Please fill in all fields.";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    msgBox.innerText = "Invalid email format.";
    return;
  }

  if (!/^\d{8,15}$/.test(phone)) {
    msgBox.innerText = "Phone must be 8–15 digits.";
    return;
  }

  if (password !== confirmPassword) {
    msgBox.innerText = "Passwords do not match.";
    return;
  }

 
  msgBox.innerText = "Registered successfully! Redirecting to login page...";
  
  
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}
