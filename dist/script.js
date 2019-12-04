$(document).ready(function() {
		$('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
		$('#menu-trigger').click(function(){
			$('#menu').slideToggle();
		});
	});