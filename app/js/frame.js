$(document).on('ready', function(){ 
	$(document).find('.frame').each(function(index, element) {
		$(element).prepend('<div class="frame__top"></div>');
		$(element).append('<div class="frame__bottom"></div>');
	});

})