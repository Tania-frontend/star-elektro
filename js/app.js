$(document).ready(function() {


//Login modal
$('.popup-link').on('click', function (e){
  $('.popup-map').fadeIn();

});


$('.popup__close').on('click', function (e){
  $('.popup-map').fadeOut();


});

$(document).on('mouseup', function (event){
  const popupMap = $('.popup__window');
  if(!popupMap.is(event.target) && popupMap.has(event.target).length === 0){
      $('.popup').fadeOut();
  }
})

});





