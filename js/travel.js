// Filter JS
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.post-box').each(function() {
                $(this).css('left', '-100%').show().animate({ left: '0' }, 300); // Slide from left to right
            });
        } else {
            $('.post-box').each(function() {
                if ($(this).hasClass(value)) {
                    $(this).css('left', '-100%').show().animate({ left: '0' }, 300); // Slide from left to right for matching items
                } else {
                    $(this).animate({ left: '-100%' }, 300, function() { $(this).hide(); }); // Slide out to left and hide
                }
            });
        }
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});