const dropdown = document.getElementById("dropdown");

  function toggleDropdown() {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  function goToProfile() {
    const name = "NguyenVanA";
    const email = "abc@gmail.com";
    const phone = "0909123456";
    const address = "TP.HCM";
    
    // Encode để tránh lỗi khi có ký tự đặc biệt
    const url = `profile_customer.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&address=${encodeURIComponent(address)}`;

    window.location.href = url;
  }

  function logout() {
  window.location.href = "login.html";
  }

  // Ẩn dropdown nếu click ra ngoài
  window.addEventListener("click", function (e) {
    const avatar = document.querySelector(".avatar-container");
    if (!avatar.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });