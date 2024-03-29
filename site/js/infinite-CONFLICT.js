// THIS SCRIPT CAUSED A CONFLICT WITH LEFT MENU SCRIPT!!!

// infinite scroll

var visibleHeight = $(document).height() - $(window).height();
var items;

function updateHeight() {
    visibleHeight = $(document).height() - $(window).height();
}

storeElements();
 
$(window).on('resize', function(e) {
    updateHeight();
});
 
$(window).on('scroll', function(e) {
    loadContent();
});

function storeElements() {
    items = $('.portfolio-item:lt(3)').clone();
    //Strip the first class from selection
    items.removeClass('first');
}

function loadContent() {
 
    if($(window).scrollTop() >= visibleHeight) {
 
        $(window).unbind('scroll');
         
        var loadingWrap = $('.loading-wrap');
         
        loadingWrap.fadeIn(function() {
            setTimeout(function() {
                loadingWrap.before(items);
                loadingWrap.hide(function() {
                    updateHeight();
                    storeElements();
                    $(window).on('scroll', function() { loadContent(); });
                });
            }, 500);
        });
 
    }
}

// for mobile
$('.menus h3').on('click', function(e) {
    $(this).next('ul').toggleClass('open');
    updateHeight();
    e.preventDefault(); return false;
});