(function() {
    var btn = document.querySelector('[data-submit]');

    btn.addEventListener('click', function(evt) {
        evt.preventDefault();

        btn.innerHTML = 'Sending...';
        
        var result = {};
        
        [
          'gender',
          'age',
          'play',
          'players',
          'rounds',
          'time',
          'fun',
          'again',
          'length',
          'conversation',
          'depth',
          'recommend',
          'cost',
          'buy',
          'credit',
          'update'          
        ].forEach(function(name){
            var counter = 0;
            var element;
            var id;
            while (true){
                id = name + '-' + counter;
                element = document.getElementById(id);
                if (!element) break;
                if (element.checked){
                    result[name] = element.value;
                }
                ++counter;
            } 
        });
        
        [
            'playExpierience',
            'recommendComment',
            'weakTopics',
            'newTopics',
            'comments',
            'firstname',
            'lastname',
            'email'            
        ].forEach(function(name){
            result[name] = document.getElementById(name).value
        })

        result.timestamp = (new Date()).toString();
       
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
                        global_merge_vars: [{
                            name: 'result',
                            content: JSON.stringify(result, null, 4)
                        }],
                        tags: [
                            "playtesting"
                        ]
                    },
                    async: false
                }
        ));
    })
})();



