$(window).on("load", function() {
    "use strict";

    // LOADER 

    $(".preloader").fadeOut();

    // RESPONSIVE MOBILE MENU 

    $(".menu-btn").on("click", function() {
      $(".responsive-mobile-menu").toggleClass("show");
      return false;
    });

    $(".close-slide").on("click", function() {
      $(".responsive-mobile-menu").removeClass("show");
    });
    $(".menu-btn, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    })

    // CONTACT FORM VALIDATION  

    // if($('#contact-form').length){
    //   $('#submit').click(function(){
        
    //           var o = new Object();
    //           var form = '#contact-form';
        
    //           var name = $('#contact-form .name').val();
    //           var email = $('#contact-form .email').val();
    //           // var phone = $('#contact-form .phone').val();
        
    //     if(name == '' || email == '')
    //     {
    //       $('#contact-form .response').html('<div class="failed">Please fill the required fields.</div>');
    //       return false;
    //     }
              
    //     $.ajax({
    //         url:"sendemail.php",
    //         method:"POST",
    //         data: $(form).serialize(),
    //         beforeSend:function(){
    //             $('#contact-form .response').html('<div class="text-info"><img src="images/preloader.gif"> Loading...</div>');
    //         },
    //         success:function(data){
    //             $('form').trigger("reset");
    //             $('#contact-form .response').fadeIn().html(data);
    //             setTimeout(function(){
    //                 $('#contact-form .response').fadeOut("slow");
    //             }, 5000);
    //         },
    //         error:function(){
    //             $('#contact-form .response').fadeIn().html(data);
    //         }
    //     });
    // });
    // }

});

// Contact form validation EmailJS

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Envian...';

   const serviceID = 'default_service';
   const templateID = 'template_qjx7jxe';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado correctamente!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});