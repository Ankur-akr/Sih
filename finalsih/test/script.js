// Dark mode toggle
const toggleBtn = document.querySelector(".toggle-mode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Highlight active sidebar link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Sidebar menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    body.classList.toggle('sidebar-collapsed');
  });
}

// Logout functionality for Student
const logoutBtnStudent = document.getElementById('logout-btn-student');
if (logoutBtnStudent) {
    logoutBtnStudent.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Logout functionality for Faculty
const logoutBtnFaculty = document.getElementById('logout-btn-faculty');
if (logoutBtnFaculty) {
    logoutBtnFaculty.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}