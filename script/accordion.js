const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-btn');

  button.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
