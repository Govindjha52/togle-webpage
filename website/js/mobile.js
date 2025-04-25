$(function() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        let $currentLi = null;
        let $currentSubMenu = null;
        let $previousSubMenu = null;
        $('.sub-element, .sub-element2').hide();

        $('.element > li > a').click(function(e) {
            e.preventDefault();

            $currentLi = $(this).closest('li');
            const $submenu = $currentLi.find('.sub-element').first();

            if ($submenu.length) {
                $('.element').css('display', 'flex');
                $('.combine').css('right', '0');

                if (!$submenu.find('.back-link').length) {
                    const backText = $(this).text();
                    const $back = $('<li class="back-link"><a href="#">← ' + backText + '</a></li>');
                    $submenu.prepend($back);
                }

                $submenu.show();
                $previousSubMenu = null;
                $currentSubMenu = $submenu;
            }
        });

        $(document).on('click', '.back-link > a', function(e) {
            e.preventDefault();

            if ($currentSubMenu) {

                $('.element').show();
                $('.combine').css('right', '0');

                $currentSubMenu.hide().find('.back-link').remove();
                $currentLi = null;
                $currentSubMenu = null;
            }
        });

        $(document).on('click', '.sub-element > li > a', function(e) {
            e.preventDefault();

            const $currentSubElement = $(this).closest('li');
            const $subSubMenu = $currentSubElement.find('.sub-element2').first();

            if ($subSubMenu.length) {
                // Add back link for sub-element2
                if (!$subSubMenu.find('.back-link').length) {
                    const backText = $(this).text();
                    const $back = $('<li class="back-link"><a href="#">← ' + backText + '</a></li>');
                    $subSubMenu.prepend($back);
                }

                // Show sub-element2
                $subSubMenu.show();
                $('.combine').css('right', '0%');
                $previousSubMenu = $currentSubMenu;
                $currentSubMenu = $subSubMenu;
            }
        });

        $(document).on('click', '.sub-element2 .back-link > a', function(e) {
            e.preventDefault();

            const $subSubMenu = $(this).closest('.sub-element2');
            $subSubMenu.hide().find('.back-link').remove();

            // Go back to the previous sub-element (sub-element)
            if ($previousSubMenu) {
                $previousSubMenu.show();
                $('.combine').css('right', '0');
                $currentSubMenu = $previousSubMenu;
                $previousSubMenu = null;
            }
        });
    }
});