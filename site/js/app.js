// left side menus

$(function() {
 
    $('.menus h3.work').on('click', function(e) {
    	//console.log("click");
        $('ul').removeClass('open2 open3');
        $(this).next('ul').toggleClass('open');
        e.preventDefault(); return false;
    });

    $('.menus h3.about').on('click', function(e) {
        $('ul').removeClass('open open3');
        $(this).next('ul').toggleClass('open2');
        e.preventDefault(); return false;
    });

    $('.menus h3.contact').on('click', function(e) {
        $('ul').removeClass('open open2');
        $(this).next('ul').toggleClass('open3');
        e.preventDefault(); return false;
    });
 
});

