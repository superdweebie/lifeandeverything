(function(){
    var menuItems = document.querySelectorAll('[data-spy]'),
        scrollItems = [],
        i;

    for(i=0; i<menuItems.length;i++){
        scrollItems.push(document.getElementById(menuItems[i].getAttribute('href').slice(1)));
    }

    window.addEventListener('scroll', function(){
        var scrollTop = window.pageYOffset;
        var hrefs = scrollItems.reduce(function(previous, item){
            if (item.offsetTop - scrollTop <= 0 && item.offsetTop + item.offsetHeight - scrollTop > 0) previous.push(item)
            return previous;
        }, []).map(function(item){return '#' + item.getAttribute('id')});
        if (hrefs.length === 0 ) hrefs = ['#' + scrollItems[0].getAttribute['id']]
        
        for(var i=0; i<menuItems.length;i++){            
            if (hrefs.indexOf(menuItems[i].getAttribute('href')) !== -1) {
                menuItems[i].parentElement.setAttribute('class', 'active')
            } else {
                menuItems[i].parentElement.removeAttribute('class');                
            }
        }
    })
})();
