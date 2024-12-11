// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault(); // Mencegah reload halaman
  navbarNav.classList.toggle("active");
};

// Klik di luar hamburger menu untuk menutup menu
document.addEventListener("click", (e) => {
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  // Jika klik terjadi di luar navbar dan hamburger menu, tutup menu
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Menutup menu ketika salah satu tautan di dalam navbar diklik
const navbarLinks = navbarNav.querySelectorAll("a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});


// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});


// Konfirmasi Email
function validateForm() {
  // Ambil nilai input dari form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  var emailError = document.getElementById("emailError");
  var phoneError = document.getElementById("phoneError");

  // Cek jika ada input yang kosong
  if (name === "" || email === "" || phone === "") {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return false;
  }

  // Validasi Email dengan Regex
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    emailError.style.display = "inline";
    return false;
  } else {
    emailError.style.display = "none";
  }

  // Validasi Nomor HP dengan Regex
  var phonePattern = /^[0-9]{10,15}$/;
  if (!phonePattern.test(phone)) {
    phoneError.style.display = "inline";
    return false;
  } else {
    phoneError.style.display = "none";
  }

  return true;
}


