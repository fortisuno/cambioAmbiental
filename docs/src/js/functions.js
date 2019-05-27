$('.sidebar').hide();

$(document).ready(function(){

    // Mostrar sidebar
    $('.btn-menu').click(function(e){
        e.preventDefault();

        $('.sidebar').fadeIn(function(){
            $('.sidebar-menu').animate({
                left: '0'
            }, 500);
        });

        $('body').css('overflow', 'hidden');

    });

    //Ocultar sidebar
    $('.sidebar-close').click(function(){

        $('.sidebar-menu').animate({
            left: '-16rem'
        }, 500, function(){
            $('.sidebar').fadeOut();
        });

        $('body').css('overflow', 'auto');
    });

});