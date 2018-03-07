$(document).ready(function() {
    
  const timeout = 6000, timePerFade = 1500;
  var $photos = $('.fader-photo'),
      currentPhoto = 0;
  
  function init() {
    $photos.hide();
    $photos.eq(0).show();
    fadeOut();
  }
  
  function fadeOut() {
    clearTimeout(timeout);
    window.setTimeout(function() {
      $photos.eq(currentPhoto).fadeOut(timePerFade, fadeIn());
    }, timeout);
  }
  
  function fadeIn () {
    determineNextPhoto();
    $photos.eq(currentPhoto).fadeIn(timePerFade, fadeOut());
  }
  
  function determineNextPhoto() {
    currentPhoto === ($photos.length - 1) ? currentPhoto = 0 : currentPhoto++;
  }
    
  init();  
  
});