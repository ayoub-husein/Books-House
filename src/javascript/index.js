import 'popper.js/dist/popper.min'
import 'jquery/dist/jquery.min'
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../sass/style.scss'


$(function(){

    $('#copyright').text("جميع الحقوق محفوظة للمتجر لسنة " + new Date().getFullYear());

    var pathname = window.location.pathname;
    $('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
    
});

