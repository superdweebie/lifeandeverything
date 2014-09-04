(function() {
    
    //preview updater
    setInterval(function(){
        document.getElementById('previewFriendName').innerHTML = document.getElementById('friendFirstname').value + ' ' + document.getElementById('friendLastname').value;
        
        var senderName = document.getElementById('senderFirstname').value + ' ' + document.getElementById('senderLastname').value;
        document.getElementById('previewSenderName1').innerHTML = senderName;
        document.getElementById('previewSenderName2').innerHTML = senderName;
        document.getElementById('previewSenderName3').innerHTML = senderName;        
        
        document.getElementById('previewMessage').innerHTML = document.getElementById('message').value;
        document.getElementById('previewSenderEmail').innerHTML = document.getElementById('senderEmail').value;        
    }, 500);
    
    var btn = document.querySelector('[data-submit]');

    btn.addEventListener('click', function(evt) {
        evt.preventDefault();

        btn.innerHTML = 'Sending...';
        
        var friendEmail = document.getElementById('friendEmail').value;
        var friendName = document.getElementById('friendFirstname').value + ' ' + document.getElementById('friendLastname').value;
        var senderName = document.getElementById('senderFirstname').value + ' ' + document.getElementById('senderLastname').value;
        
        var mergeVars = [
            {
                name: 'senderName',
                content: senderName
            },
            {
                name: 'friendName',
                content: friendName
            }
        ];
                
        [
            'senderEmail',
            'message'           
        ].forEach(function(name){
            mergeVars.push({
                name: name,
                content: document.getElementById(name).value
            })
        })
       
        var jsonhttp = new XMLHttpRequest;
        jsonhttp.onreadystatechange = function() {
            if (jsonhttp.readyState === 4 && jsonhttp.status === 200) {
                btn.innerHTML = 'Invite sent!';
            } else if (jsonhttp.readyState === 4 && jsonhttp.status === 500) {
                btn.innerHTML = 'Send error :(';                
            }
        }
        jsonhttp.open("POST", "https://mandrillapp.com/api/1.0/messages/send-template.json", true);
        jsonhttp.setRequestHeader("Content-Type", "application/json");
        jsonhttp.send(JSON.stringify(
                {
                    key: "p6FIFlwMRKs757F3S2Ozew",
                    template_name: "life-and-everything-invite",
                    template_content: [],
                    'message': {
                        to: [
                            {
                                email: friendEmail,
                                name: friendName,
                                type: "to"
                            }
                        ],
                        'headers': {
                            'Reply - To': "tim@lifeandeverything.net"
                        },
                        inline_css: true,
                        global_merge_vars: mergeVars,
                        tags: [
                            "invite"
                        ]
                    },
                    async: false
                }
        ));
    })
})();
