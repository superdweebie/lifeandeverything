(function(){
    var menuItems = document.querySelectorAll('[data-spy]'),
        scrollItems = [],
        i;

    for(i=0; i<menuItems.length;i++){
        scrollItems.push(document.getElementById(menuItems[i].getAttribute('href').slice(1)));
    }

    window.onscroll = function(){
        var scrollTop = window.pageYOffset;
        var href = '#' + scrollItems.reduce(function(previous, item){
            if (item.offsetTop - scrollTop - 150 <= 0) return item;
            return previous;
        }, scrollItems[0]).getAttribute('id');
        for(var i=0; i<menuItems.length;i++){
            if (menuItems[i].getAttribute('href') == href) menuItems[i].parentElement.setAttribute('class', 'active')
            else menuItems[i].parentElement.removeAttribute('class');
        }
    }
})();
