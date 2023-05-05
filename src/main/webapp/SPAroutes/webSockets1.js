


async function initiateWebsocket(){
        if (userType>0){
            const jwtToken = await fetch("http://localhost:8090/api/authenticate/getToken/", {
                credentials: 'include'
            })
                .then((response)=>{
                    return response.json()
                })


            //notifications handling
            notificationWebSocket = new WebSocket('ws://localhost:8090/notificationHandler');
            notificationWebSocket.onopen = () =>{
                const message = {
                    "config" : true,
                    "token" : jwtToken["token"]
                }
                notificationWebSocket.send(JSON.stringify(message));
            }
            notificationWebSocket.onerror = (error) => {
                console.error('notification web socket error:', error);
            };

            notificationWebSocket.onmessage = (event)=>{
                alert("notification ekak")
                alert(event.data)
                if (window.location.pathname == "/notification"){
                    let newNotification = document.createElement('notification-message5');
                    newNotification.setAttribute("date", "2020-02-02")
                    newNotification.setAttribute("time","Now")
                    newNotification.setAttribute("id", "1")
                    newNotification.setAttribute("sender_name", "mama thamai")
                    newNotification.setAttribute("message", "this is the message")
                    newNotification.setAttribute("img_src", "/img_src");
                    document.querySelector('.cont-body-content').appendChild(newNotification)
                }
                else{
                    increaseNotificationCount();
                }


            }


            //question chat handling
            questionCHat = new WebSocket('ws://localhost:8090/questionChatHandler');

            let receivedMessage;

            questionCHat.onopen = () => {
                const message = {
                    "config" : true,
                    "token" : jwtToken["token"]
                };
                questionCHat.send(JSON.stringify(message));
                alert("question chat opned");
            }

            notificationWebSocket.onerror = (error) => {
                console.error('notification web socket error:', error);
            };


            questionCHat.addEventListener('message', (event)=>{
                receivedMessage = JSON.parse(event.data);

                alert("message ek awoo")
                console.log(JSON.stringify(receivedMessage))
                alert("message ek awoo")

                if (receivedMessage["receiver"] == getUserID()){
                    let chatContainer = document.querySelector(`#open-question-chat${3}`);
                    if (chatContainer){
                        let newMessage = document.createElement('chat-msg');
                        newMessage.setAttribute("msg", "AWA SAGOR");
                        newMessage.setAttribute("type", "open-question-incomMSG");
                        chatContainer.appendChild(newMessage);
                        alert("methnt awne")
                        chatContainer.scrollTop = chatContainer.scrollHeight;
                    }
                    else{
                        alert(receivedMessage["message"]);
                        alert("methnt awe ne")
                    }


                }


            })
            socketsStartedBefore = true;
            alert("sockets weda")

        }
}


function closeWebsockets(){

    notificationWebSocket.close();
    questionCHat.close();
    socketsStartedBefore = false;
}