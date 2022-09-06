const hamburger = document.querySelector('#clicktoggle');
hamburger.addEventListener('click', () => {
  const hamburger = document.querySelector('.hamburger');
  const navigate = document.querySelector('.navigate');
  const hero = document.querySelector('.hero');
  const headerBrand = document.querySelector('.headerBrand');
  hamburger.classList.toggle('active');
  navigate.classList.toggle('active');
  hero.classList.toggle('greyed_out');
  headerBrand.classList.toggle('greyed_out');
});
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', () => {
  const navigate = document.querySelector('.navigate');
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
  navigate.classList.toggle('active');
});
const toggle2 = document.querySelector('#toggle2');
toggle2.addEventListener('click', () => {
  const navigate = document.querySelector('.navigate');
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
  navigate.classList.toggle('active');
});
const toggle3 = document.querySelector('#toggle3');
toggle3.addEventListener('click', () => {
  const navigate = document.querySelector('.navigate');
  const hamburger = document.querySelector('.hamburger');
  hamburger.classList.toggle('active');
  navigate.classList.toggle('active');
});