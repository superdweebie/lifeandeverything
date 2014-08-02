(function() {
    var btn = document.querySelector('[data-submit]');

    btn.addEventListener('click', function(evt) {
        evt.preventDefault();

        btn.innerHTML = 'Sending...';
        
        var topicWeight;
        if (document.getElementById('topicWeight1').checked) topicWeight = document.getElementById('topicWeight1').value
        if (document.getElementById('topicWeight2').checked) topicWeight = document.getElementById('topicWeight2').value
        if (document.getElementById('topicWeight3').checked) topicWeight = document.getElementById('topicWeight3').value        

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
                    template_name: "life-and-everything-rss",
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
                        global_merge_vars: [
                            {
                                name: "topicweight",
                                content: topicWeight
                            },
                            {
                                name: "weaktopics",
                                content: document.getElementById('weakTopics').value
                            },
                            {
                                name: "newtopics",
                                content: document.getElementById('newTopics').value
                            },
                            {
                                name: "comments",
                                content: document.getElementById('comments').value
                            },
                            {
                                name: "firstname",
                                content:  document.getElementById('firstname').value
                            },
                            {
                                name: "lastname",
                                content:  document.getElementById('lastname').value
                            },
                            {
                                name: "email",
                                content:  document.getElementById('email').value
                            }
                        ],
                        tags: [
                            "discussion-cards-feedback"
                        ]
                    },
                    async: false
                }
        ));
    })
})();



