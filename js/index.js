

var shrinkHeader = (function() {

	var $docElem = $(document.documentElement),
		  $navbar = $('.navbar'),
		  $logo = $('.logo-wrapper'),
		  $navLinks = $('.nav-links ul'),
		  shrinkPosition = 83,
		  headerIsShrunk = false,
		  isChecking = false,
      yPosition;
  
  console.log('navabar: ' + $navbar);
  console.log($navLinks);

	function init() {
		window.addEventListener( 'scroll', function( event ) {
		  if(!isChecking) {
		    isChecking = true
		    setTimeout(checkPosition, 25);
		  }
		}, false );
	}

	function getYPosition() {
		return $docElem.scrollTop();
	}
	
	function checkPosition() {
	  checkForChange(getYPosition());
	 
	}
	
	function checkForChange(position) {
    if (position >= shrinkPosition) shrinkNavbar();
	  else expandNavbar();
	  isChecking = false;
	}
	
	function shrinkNavbar () {
	  $navbar.addClass('navbar-shrink');
	  $logo.addClass('logo-wrapper-shrink');
	  $navLinks.css( { 'line-height': '90px'} )
	  headerIsShrunk = true;
	}
	
	function expandNavbar () {
	  $navbar.removeClass('navbar-shrink');
	  $logo.removeClass('logo-wrapper-shrink');
    $navLinks.css( { 'line-height': '116px'} )
	  headerIsShrunk = false;
	}

	init();

})();
