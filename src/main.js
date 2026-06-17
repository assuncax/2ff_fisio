import './style.css'

/* ---------- Menu mobile ---------- */
const toggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

toggle?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

// Fecha o menu ao clicar em um link
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})

/* ---------- Sombra no header ao rolar ---------- */
const header = document.getElementById('topo')
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('shadow-md')
  } else {
    header.classList.remove('shadow-md')
  }
})

/* ---------- Reveal on scroll ---------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
