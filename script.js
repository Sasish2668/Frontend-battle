// Loader hide on load
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Dark/Light Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Optionally persist theme to localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Apply saved theme on reload
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Button ripple effect
document.querySelectorAll(".ripple").forEach(button => {
  button.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Brand Kit Switcher
function switchKit(kit) {
  const display = document.getElementById("kit-display");
  let content = "";
  if (kit === "web") {
    content = "<strong>Web Development:</strong> Scalable, secure apps using React, Node, and MongoDB.";
  } else if (kit === "design") {
    content = "<strong>UI/UX Design:</strong> Wireframes, high-fidelity design, accessibility.";
  } else if (kit === "ecommerce") {
    content = "<strong>E-Commerce:</strong> Product listings, carts, Stripe payments, order tracking.";
  }
  display.innerHTML = content;
}

// Contact form feedback
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks! We’ll get back to you shortly.");
  this.reset();
});

// Scroll animation trigger (for fadeInUp)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});
