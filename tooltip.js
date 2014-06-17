(function(){
    var trigger = document.querySelector('[data-why-tooltip-trigger]'),
        tooltip = document.querySelector('[data-why-tooltip]');

    function doOpen(evt){
        evt.preventDefault();
        var left = window.pageXOffset + trigger.offsetLeft - tooltip.offsetWidth / 2;
        var right = window.pageYOffset + trigger.offsetTop + 20;
        tooltip.setAttribute('style', 'left: ' + left + 'px; top:' + right + 'px');
        tooltip.setAttribute('class', 'tooltip fade bottom in');
    }

    function doClose(evt){
        tooltip.setAttribute('class', 'tooltip fade bottom');
    }
    trigger.addEventListener('click', doOpen);
    trigger.addEventListener('mouseout', doClose);
})();


