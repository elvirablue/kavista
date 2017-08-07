$(document).on('ready', function(){ 

	// возвращает cookie с именем name, если есть, если нет, то undefined
	
	var cook_adult = getCookie("cook_adult");

	function getCookie(name) {

	    var matches = document.cookie.match(new RegExp(
	      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	    ))
	    return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	var popup_wrapper_adult = document.querySelector('.modal_wrapper.adult');
    var popup_adult = document.querySelector('.modal.adult');
    var btn_adult = popup_adult.querySelector('#btn_adult');	
	
	if (!cook_adult) {
		popup_adult.classList.remove('zoomOut');
		popup_wrapper_adult.classList.remove('fadeOut');
		popup_adult.classList.add('show', 'zoomIn');
		popup_wrapper_adult.classList.add('show', 'fadeIn');
	}

	

    btn_adult.addEventListener('click', function(event) {
          if (popup_adult.classList.contains('show')) {

          		document.cookie = "cook_adult=true";

                popup_adult.classList.add('zoomOut');
                popup_wrapper_adult.classList.add('fadeOut');
                setTimeout(function(){
                      popup_adult.classList.remove('show', 'zoomIn' );      
                      popup_wrapper_adult.classList.remove('show', 'fadeIn');
                }, 300);
                
          };
          
    });
});