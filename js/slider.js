$('.slider').each(function() {
  var $this = $(this),
      $group = $this.find('.slide-group'),
      $slides = $this.find('.slide'),
      buttonArray = [],
      currentIndex = 0,
      timePerSlide = 4000,
      timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advanceSlide();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    buttonArray[currentIndex].removeClass('active');
    buttonArray[newIndex].addClass('active');
    
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
    timeout = setTimeout(function() {
      currentIndex < ($slides.length -1) ? move(currentIndex + 1) : move(0);
    }, timePerSlide);
  }
  
  $.each($slides, function(index) {
    var $button = $('<button type="button" class="slide-btn"></button>');
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function () {
      move(index);
    }).appendTo($this.find('.slide-buttons'));
    buttonArray.push($button);
  });
  
  advanceSlide();
   
});