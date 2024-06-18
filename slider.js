
window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      767: {
        enabled: false,
        spaceBetween: 0
      }
    }
  });
})



const button = document.querySelector('.button');

let hiddenEls768px = document.querySelectorAll('.hidden-768px');
let hiddenEls1120px = document.querySelectorAll('.hidden-1120px');



button.addEventListener('click', () => {
  const currentViewportWidth = window.visualViewport.width;

  button.classList.toggle('button--rotated');

  hiddenEls1120px.forEach(el => el.classList.toggle('hidden-1120px'));

  if (currentViewportWidth < 1120) {
    hiddenEls768px.forEach(el => el.classList.toggle('hidden-768px'));
  }

})


let isToggled = false; 

button.addEventListener('click', () => {
    
    isToggled = !isToggled;

    if (isToggled) {
        button.textContent = "Скрыть";
    } else {
        button.textContent = "Показать все";
    }
});