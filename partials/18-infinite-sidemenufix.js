// Inside the h3 click handler we created right at the start we must add in a call toupdateHeight(), this way when we click to open a menu the variables are updated to reflect the change in height of the document. Without this, if you open a menu on mobile the "loading" functionality would be broken as the visibleHeight variable would be incorrect.
$('.menus h3').on('click', function(e) {
    $(this).next('ul').toggleClass('open');
    updateHeight();
    e.preventDefault(); return false;
});