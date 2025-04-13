const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav ul li a'); // Adjust if your structure is different

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });