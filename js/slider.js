var $ = jQuery();   // temporary to remove warnings

$('.slider').each(function() {
  var $this = $(this),
      $group = $this.find('.slide-group'),
      $slides = $this.find('.slide'),
      buttonArray = [],
      currentIndex = 0,
      timePerSlide = 4000,
      timeout;
  
  function updateButtonState(newIndex) {
    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');
  }
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advanceSlide();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    updateButtonState(newIndex);
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';  
    }
    
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
    $group.animate( {left: animateLeft}, function() {
      $slides.eq(currentIndex).css( {display: 'none'} );
      $slides.eq(newIndex).css( {left: 0} );
      $group.css( {left: 0} );
      currentIndex = newIndex;
    });
  }
  
  function advanceSlide() {
    clearTimeout(timeout);
    timeout = window.setTimeout(determineNextSlide, timePerSlide);
  }
  
  function determineNextSlide () {
    currentIndex < ($slides.length -1) ? move(currentIndex + 1) : move(0);
  }
  
  function createButtonHTML () {
    return $('<button type="button" class="slide-btn"></button>');
  }
  
  function addButtonHTML ($button) {
    $button.appendTo($this.find('.slide-buttons'));
  }
  
  function addButtonEventListener ($button, index) {
    $button.on('click', function () { move(index) });
  }
  
  function createButtons () {
    $.each($slides, function(index) {
      var $button = createButtonHTML();
      if (index === currentIndex) $button.addClass('active');
      addButtonHTML($button);
      addButtonEventListener($button, index);
      buttonArray.push($button);
    });
  }
  
  createButtons();
  advanceSlide();
   
});