// Thanh cuon
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// end thanh cuon


//start menu
const menuBtn=document.querySelector('.menu-btn');
const listMenu=document.querySelector('.modal-menu');
const closeBtn=document.querySelector('.ti-close');
function showMenu(){
 listMenu.classList.add('open');
}
function closeMenu(){
  listMenu.classList.remove('open');
}
menuBtn.addEventListener('click', showMenu)

closeBtn.addEventListener('click',closeMenu)

// end menu
const list1=document.querySelector('.js-list-1');
const list2=document.querySelector('.js-list-2');
const list3=document.querySelector('.js-list-3');

const showLs1=document.querySelector('.ls1');
const showLs2=document.querySelector('.ls2');
const showLs3=document.querySelector('.ls3');
function showList1(){
    showLs1.classList.add('open');
}
function showList2(){
  showLs2.classList.add('open');
}
function showList3(){
  showLs3.classList.add('open');
}
list1.addEventListener('click',showList1)
list2.addEventListener('click',showList2)
list3.addEventListener('click',showList3)