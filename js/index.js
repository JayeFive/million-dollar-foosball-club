

var shrinkHeader = (function() {

	const shrinkPosition = 83, timeout = 25;
	var   $docElem = $(document.documentElement),
		    $navbar = $('.navbar'),
		    $logo = $('.logo-wrapper'),
		    $navLinks = $('.nav-links ul'),
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
	  $navbar.addClass('navbar-shrink');
	  $logo.addClass('logo-wrapper-shrink');
	  $navLinks.css( { 'line-height': '90px'} );
	}
	
	function expandNavbar () {
	  $navbar.removeClass('navbar-shrink');
	  $logo.removeClass('logo-wrapper-shrink');
    $navLinks.css( { 'line-height': '116px'} );
	}

	init();

})();
