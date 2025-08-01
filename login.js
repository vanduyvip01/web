function login() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const msg = document.getElementById('loginMsg');

  
  const defaultUsername = "admin";
  const defaultPassword = "123456";

  if (username === defaultUsername && password === defaultPassword) {
    msg.innerText = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "trangchuPick.html";
    }, 1000);
  } else {
    msg.innerText = "Incorrect username or password.";
  }
}
