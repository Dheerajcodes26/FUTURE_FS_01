import './style.css';

const roles = ['AI Enthusiast', 'Computer Vision Developer', 'Full Stack Learner', 'Problem Solver', 'Prompt Engineer'];
let i = 0;
setInterval(() => { const el = document.querySelector('#typing'); el.classList.add('out'); setTimeout(() => { i = (i + 1) % roles.length; el.textContent = roles[i]; el.classList.remove('out'); }, 280); }, 2600);
const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => { glow.style.transform = `translate(${e.clientX - 180}px,${e.clientY - 180}px)`; });
const progress = document.querySelector('.progress');
const top = document.querySelector('.to-top');
let lastY = 0;
window.addEventListener('scroll', () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${scrollY / max * 100}%`; top.classList.toggle('show', scrollY > 700); document.querySelector('#nav').classList.toggle('nav-hidden', scrollY > lastY && scrollY > 300); lastY = scrollY; });
top.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));
const observer = new IntersectionObserver(entries => entries.forEach(x => x.isIntersecting && x.target.classList.add('show')), {threshold:.12});
document.querySelectorAll('.section, .reveal').forEach(x => observer.observe(x));
function toggleMobileMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}