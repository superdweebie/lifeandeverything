(function(){
    var trigger = document.querySelectorAll('[data-modal-trigger]'),
        close = document.querySelectorAll('[data-dismiss]'),
        modal = document.querySelector('[data-modal]'),
        i,
        backdrop;

    function doClose(evt){
        if (typeof evt !== undefined) evt.preventDefault();
        modal.setAttribute('class', 'modal fade');
        backdrop.setAttribute('class', 'modal-backdrop fade');
        modal.setAttribute('style', 'display: none');
        document.body.removeAttribute('class');
        document.body.removeChild(backdrop);
        backdrop = null;
    }

    function doOpen(evt){
        if (evt) evt.preventDefault()
        document.body.setAttribute('class', '.modal-open');
        backdrop = document.createElement('div');
        backdrop.setAttribute('class', 'modal-backdrop fade');
        document.body.appendChild(backdrop);
        modal.setAttribute('style', 'display: block');
        setTimeout(function(){
            modal.setAttribute('class', 'modal fade in');
            backdrop.setAttribute('class', 'modal-backdrop fade in');
        })
    }

    for(i=0; i<trigger.length;i++){
        trigger[i].addEventListener('click', doOpen)
    }

    for(i=0; i<close.length;i++){
        close[i].addEventListener('click', doClose)
    }
    
    window.modal = {doOpen: doOpen};
})();
