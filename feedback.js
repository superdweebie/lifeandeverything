(function() {
    var btn = document.querySelector('[data-submit]');

    btn.addEventListener('click', function(evt) {
        evt.preventDefault();

        btn.innerHTML = 'Sending...';
        
        var mergeVars = [];
        
        ['gender'].forEach(function(name){
            var counter = 0;
            var element;
            var id;
            while (true){
                id = name + '-' + counter;
                element = document.getElementById(id);
                if (!element) break;
                if (element.checked){
                    mergeVars.push({
                        name: name,
                        content: element.value
                    })
                }
                ++counter;
            } 
        })
        
        ['play-expierience'].forEach(function(name){
            mergeVars.push({
                name: name,
                content: document.getElementById(name).value
            })
        })

        var jsonhttp = new XMLHttpRequest;
        jsonhttp.onreadystatechange = function() {
            if (jsonhttp.readyState === 4 && jsonhttp.status === 200) {
                btn.innerHTML = 'Thanks!';
            }
        }
        jsonhttp.open("POST", "https://mandrillapp.com/api/1.0/messages/send-template.json", true);
        jsonhttp.setRequestHeader("Content-Type", "application/json");
        jsonhttp.send(JSON.stringify(
                {
                    key: "p6FIFlwMRKs757F3S2Ozew",
                    template_name: "life-and-everything-feedback",
                    template_content: [],
                    'message': {
                        to: [
                            {
                                email: "tim@lifeandeverything.net",
                                name: "tim",
                                type: "to"
                            }
                        ],
                        'headers': {
                            'Reply - To': "tim@lifeandeverything.net"
                        },
                        inline_css: true,
                        global_merge_vars: mergeVars,
                        tags: [
                            "playtesting"
                        ]
                    },
                    async: false
                }
        ));
    })
})();



