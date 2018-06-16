

var shrinkHeader = (function() {

	const shrinkPosition   = 83, timeout = 50;
	var   $docElem         = $(document.documentElement),
	      $infoBar         = $('.info-bar'),
		    $navbar          = $('.navbar'),
		    $photoFader      = $('.fader'),
		    $eventsContainer = $('.events-container'),
		    isChecking       = false;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
		  if(!isChecking) {
		    isChecking = true
		    setTimeout(checkPosition, timeout);
		  }
		}, false );
	}

	function checkPosition() {
	  checkForChange(getYPosition());
	}
	
	function getYPosition() {
		return $docElem.scrollTop();
	}
	
	function checkForChange(position) {
    if (position >= shrinkPosition) shrinkNavbar();
	  else expandNavbar();
	  isChecking = false;
	}
	
	function shrinkNavbar () {
	 // var navbarWidth = $infoBar.width();
	  $navbar.addClass('navbar-shrink');
	 // $navbar.width(navbarWidth);
	  $photoFader.css( { 'top':'116px' } );
	  $eventsContainer.css( { 'top':'528px' } );
	}
	
	function expandNavbar () {
	  $navbar.removeClass('navbar-shrink');
	  $photoFader.css( { 'top':'0px' } );
	  $eventsContainer.css( { 'top':'412px' } );
	}

	init();

})();
