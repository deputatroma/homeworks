$(function(){
  $('.menu__button').click(function(){
    $('.navbar').toggleClass('showNav');
    $('.menu__button').toggleClass('showClose');
  });
  $('.menu__item').click(function(){
    $('.navbar').removeClass('showNav');
    $('.menu__button').removeClass('showClose');
  });
});