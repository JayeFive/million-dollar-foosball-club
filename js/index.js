

var shrinkHeader = (function() {

	const shrinkPosition = 83, timeout = 50;
	var   $docElem = $(document.documentElement),
		    $header = $('.sticky-header'),
		    $navbar = $('.navbar'),
		    isChecking = false;

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
	  var navbarWidth = $header.width();
	  $navbar.addClass('navbar-shrink');
	  $navbar.width(navbarWidth);
	}
	
	function expandNavbar () {
	  $navbar.removeClass('navbar-shrink');
	}

	init();

})();
