


async function initiateWebsocket(){
        if (userType>0){
            const jwtToken = await fetch("http://localhost:8090/api/authenticate/getToken/", {
                credentials: 'include'
            })
                .then((response)=>{
                    return response.json()
                })

            //
            // console.log("mekth wed");
            // console.log(jwtToken["token"]);
            // console.log("wed");

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
                alert("event.data2")
                let notificationWrapper = document.querySelector('#js-notification-list-ui');
                if (notificationWrapper){
                    let newNotification = document.createElement('notification-message');
                    newNotification.setAttribute("date", "2020-02-02")
                    newNotification.setAttribute("time","Now")
                    newNotification.setAttribute("title", "this is the title")
                    newNotification.setAttribute("sender", "mama thamai")
                    newNotification.setAttribute("message", "this is the message")
                    newNotification.setAttribute("id", "1");
                    notificationWrapper.appendChild(newNotification)
                }
                else{
                    // increaseNotificationCount();
                }
            }


            //question chat handling
            questionCHat = new WebSocket('ws://localhost:8090/questionChatHandler');
            let chatContainer = document.querySelector(".open-question-chat");
            let receivedMessage;

            questionCHat.onopen = () => {
                const message = {
                    "config" : true,
                    "token" : jwtToken["token"]
                };
                questionCHat.send(JSON.stringify(message));
            }

            notificationWebSocket.onerror = (error) => {
                console.error('notification web socket error:', error);
            };


            questionCHat.addEventListener('message', (event)=>{
                receivedMessage = JSON.parse(event.data);

                if (receivedMessage["receiver"] == getUserID()){
                    if (chatContainer){
                        chatContainer.innerHTML += `
                                <div class="open-question-msg open-question-incomMSG"><p>${receivedMessage["message"]}<br></p></div>
                                <br>
                                 `
                    }
                    else{
                        alert(receivedMessage["message"]);
                    }


                }
                else if(receivedMessage["sender"] == getUserID()){
                    if (chatContainer){
                        chatContainer.innerHTML += `
                    <div class="open-question-msg open-question-outgoingMSG"> <p>${receivedMessage["message"]}</p></div>
                    <br>
            `
                    }
                    else{
                        alert(receivedMessage["message"]);
                    }

                }



                chatContainer.scrollTop = chatContainer.scrollHeight;
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