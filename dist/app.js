const hamburger = document.querySelector('nav .hamburger');
const lineBurger = document.querySelectorAll('nav .hamburger .line');
const layerNav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  layerNav.classList.toggle('burger-active');
  lineBurger.forEach((item, i) => {
    item.classList.toggle('burger-active');
  });
});
