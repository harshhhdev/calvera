const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.nav-links > *')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

navLinks.forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}))