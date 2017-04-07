  
$(document).on('ready', function(){ 
//******************модальные окна для форм**************************************************
//
//    var link_kitel = document.querySelector('#kitel');     
     
   // $("#user_phone_modal").mask("+7 (999) 999-9999");
   // $("#form-capture-user-phone").mask("+7 (999) 999-9999");
    var popup_wrapper = document.querySelector('.modal_wrapper');
    var popup = document.querySelector('.modal');
    var close = popup.querySelector('.modal_close');
    var form = popup.querySelector('form');
    var name = popup.querySelector('[name=user-name]');  
    var phone = popup.querySelector('[name=user-phone]');
    var text_hide = popup.querySelector('[name=text]');
    var title = popup.querySelector('#modal_txt');
    var btn_value = popup.querySelector('#btn_form_modal');

    var storage_name = localStorage.getItem('name');
    var storage_phone = localStorage.getItem('phone');

    //var btn_form = form.querySelector('#btn_form_modal');

    function PopupShow(event) {
          event.preventDefault();
          popup.classList.remove('zoomOut');
          popup_wrapper.classList.remove('fadeOut');
          popup.classList.add('show', 'zoomIn');
          popup_wrapper.classList.add('show', 'fadeIn');
          
          if (storage_name) {
                name.value = storage_name;
                phone.focus();
                if (storage_phone) {
                      phone.value = storage_phone;
                      btn_form.focus();
                } 
          } else {
                name.focus();
          }
    };

    if (document.querySelector('#js-btn-tour')) {

      document.querySelector('#js-btn-tour').addEventListener('click', function(event){
          event.preventDefault();          
          title.innerText = text_hide.value = 'Запись на экскурсию';
          btn_value.innerText = 'Отправить';
          PopupShow(event);
      });
    };

    

   

    function closePopup() {
          if (popup.classList.contains('show')) {
                popup.classList.add('zoomOut');
                popup_wrapper.classList.add('fadeOut');
                setTimeout(function(){
                      popup.classList.remove('show', 'zoomIn' );      
                      popup_wrapper.classList.remove('show', 'fadeIn');
                }, 300);
                
          };
          if (popup.classList.contains('modal_error')) {
                popup.classList.remove('modal_error');    
          };
    }

    window.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
                closePopup();
          };
    });

    popup_wrapper.addEventListener('click', function(event) {
          closePopup();
          
    });
 
    close.addEventListener('click', function(event) {
          event.preventDefault();
          closePopup();
    });


});