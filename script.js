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

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Update modal content
const updateModalContent = (data) => {
  const modalImage = itemDetailModal.querySelector("img");
  const modalTitle = itemDetailModal.querySelector("h3");
  const modalDescription = itemDetailModal.querySelector("p");
  const modalStars = itemDetailModal.querySelector(".product-stars");

  // Update image, title, and description
  modalImage.src = data.image;
  modalImage.alt = data.name;
  modalTitle.textContent = data.name;
  modalDescription.textContent = data.description;

  // Update stars
  modalStars.innerHTML = ""; // Clear existing stars
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.setAttribute("data-feather", "star");
    star.classList.add(i < data.stars ? "star-full" : "star");
    modalStars.appendChild(star);
  }
  feather.replace(); // Reinitialize Feather icons
};

// Handle click event
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    const productData = {
      name: btn.getAttribute("data-name"),
      description: btn.getAttribute("data-description"),
      image: btn.getAttribute("data-image"),
      stars: parseInt(btn.getAttribute("data-stars")),
    };
    updateModalContent(productData);
    itemDetailModal.style.display = "flex";
  };
});

// Close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  e.preventDefault();
  itemDetailModal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};


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


