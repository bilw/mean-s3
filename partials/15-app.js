// http://api.jquery.com/ready/
// function(e)  http://stackoverflow.com/questions/3535996/jquery-javascript-functione-what-is-e-why-is-it-needed-what-does-it-ac
$(function() {
 
    $('.menus h3').on('click', function(e) {
        $(this).next('ul').toggleClass('open');
        e.preventDefault(); return false;
    });
 
});