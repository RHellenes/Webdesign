const navBtn = document.querySelector('.nav_button')
const parentHeader = navBtn.closest('.header')


 navBtn.addEventListener('click', () => {
   parentHeader.classList.toggle('header--nav_is_open');
   
})