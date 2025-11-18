const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');   // show/hide the menu
    navToggle.classList.toggle('is-open');   // animate the hamburger into an X
  });
}
