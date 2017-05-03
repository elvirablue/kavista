$(document).on('ready', function(){ 
	function trimAll(s)
	// убирает все пробелы в строке s
	{
 		 var r=/\s+/g;
  		return s.replace(r,'');
	}

	function outSum(elemSum, elemPrice, value) {
		var sum = value * trimAll(elemPrice.text());
      	var str = sum.toString(10).replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1 ");      	
      	elemSum.text(str);
	}

	$('.js-min').click(function(event){
      	event.preventDefault();
      	var val = $('.js-current').val();
      	if (val === '' || val === '0') val = 0; else val --;
      	$('.js-current').val(val);
      	outSum($('.js-sum'), $('.js-price'), val);
      	
  	});

  	$('.js-max').click(function(event){
      	event.preventDefault();
      	var val = $('.js-current').val();
      	if (val === '') val = 1; else val ++;
      	$('.js-current').val(val);
      	outSum($('.js-sum'), $('.js-price'), val);
  	});
});