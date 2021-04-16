$(document).ready(function() {
 var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
            delay: 60000,
            disableOnInteraction: false
  },
 })

 $('.navigation').on('click', '.navigation__menu_mobile', function(){
$('.navigation').toggleClass('menu-opened');

});


//Login modal
$('.js-login').on('click', function (e){
  $('.modal--login').fadeIn();

});


$('.modal__close').on('click', function (e){
  $('.modal--login').fadeOut();


});

$(document).on('mouseup', function (event){
  const loginModal = $('.modal__window');
  if(!loginModal.is(event.target) && loginModal.has(event.target).length === 0){
      $('.modal').fadeOut();
  }
})

});



$(document).on('mouseup', function (event){
  const menuMobile = $('.menu-opened .navigation__menu');
  if(!menuMobile.is(event.target) && menuMobile.has(event.target).length === 0){
      $('.menu-opened .navigation__menu').fadeOut();
  }
});




