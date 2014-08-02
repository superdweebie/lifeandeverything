(function() {
    var affixItems = document.querySelectorAll('[data-affix]');

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset,
                cls;
        if (scrollTop > 195) {
            cls = 'affix';
        } else {
            cls = 'affix-top';
        }
        for (var i = 0; i < affixItems.length; i++) {
            affixItems[i].setAttribute('class', cls);
        }
    });

})();


