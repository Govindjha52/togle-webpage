// horizontal display 
function showHorizontal($el) {
    $el.show().css({
        transform: 'translateX(0)',
        opacity: 1
    });
}

function hideHorizontal($el) {
    $el.css({
        transform: 'translateX(100%)',
        opacity: 0
    });
    setTimeout(() => {
        $el.hide();
    }, 400);
}

// slide sub-element 

$(document).ready(function() {
    $('.sub-element, .sub-element2').hide();
    $('.catg > a, .about > a, .Brands > a , .News > a , .Career > a, .Contact > a').click(function(e) {
        e.preventDefault();
        const $submenu = $(this).siblings('.sub-element');
        const isVisible = $submenu.is(':visible');

        $('.sub-element2').each(function() {
            hideHorizontal($(this));
        });

        $('.sub-element').each(function() {
            if ($(this).is(':visible') && !$(this).is($submenu)) {
                hideHorizontal($(this));
            }
        });

        if (!isVisible) {
            showHorizontal($submenu);
            $('.combine').css({ right: '33.33%' });
        } else {
            hideHorizontal($submenu);
            $('.combine').css({ right: '0%' });
        }
    });

    $('.sub-element > li > a').click(function(e) {
        e.preventDefault();
        const $subSubMenu = $(this).siblings('.sub-element2');
        const isVisible = $subSubMenu.is(':visible');

        $('.sub-element2').each(function() {
            if ($(this).is(':visible') && !$(this).is($subSubMenu)) {
                hideHorizontal($(this));
            }
        });

        if (!isVisible) {
            showHorizontal($subSubMenu);
            $('.combine').css({ right: '66.66%' });
        } else {
            hideHorizontal($subSubMenu);
            $('.combine').css({ right: '33.33%' });
        }
    });

    $('#navbarToggleExternalContent').on('hidden.bs.collapse', function() {
        $('.combine').css({ right: '0%' });
        $('.sub-element, .sub-element2').each(function() {
            hideHorizontal($(this));
        });
    });
});