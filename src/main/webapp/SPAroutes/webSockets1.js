


async function initiateWebsocket(){
        if (userType>0){

            const jwtToken = await fetch("http://localhost:8090/api/authenticate/getToken/", {
                credentials: 'include'
            })
                .then((response)=>{
                    return response.json()
                })


            //comment handling


            commentSocket = new WebSocket('ws://localhost:8090/commentsHandler');

            commentSocket.onopen = () => {
                const message = {
                    "config" : true,
                    "token" : jwtToken["token"]
                };
                commentSocket.send(JSON.stringify(message));

            }
            commentSocket.onmessage = (event)=>{

                let comment = JSON.parse(event.data);
                let target = document.querySelector(`#js-start-quiz-id${comment["content_id"]}`);

                if (target){
                    let container = target.querySelector("#js-quiz-comment-container");
                    container.innerHTML += `
                                <div class="comment-cmnt-1">
                                    <img src="${comment["pro_pic"]}" alt="">
                                    <h5 class="fnt fnt-mid">${comment["name"]}</h5></br>
                                    <p class="fnt fnt-mid">${comment["message"]}
                                    </p>
                                </div>
                     `;
                }
                else{
                    increaseNotificationCount();
                }
            }


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

                let notification = JSON.parse(event.data);
                if (window.location.pathname == "/notification"){
                    let newNotification = document.createElement('notification-0message');
                    newNotification.setAttribute("date", notification["date"])
                    newNotification.setAttribute("time",notification["time"])
                    newNotification.setAttribute("id", notification["id"] || "")
                    newNotification.setAttribute("message", notification["message"])
                    newNotification.setAttribute("img_src", notification["img_src"]);
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

            }

            notificationWebSocket.onerror = (error) => {
                console.error('notification web socket error:', error);
            };


            questionCHat.addEventListener('message', (event)=>{
                receivedMessage = JSON.parse(event.data);


                console.log(JSON.stringify(receivedMessage))


                if (receivedMessage["receiver"] == getUserID()){
                    let chatContainer = document.querySelector(`#Js-question-chat-box${receivedMessage["questionId"]}`);
                    if (chatContainer){
                        let newMessage = document.createElement('chat-msg');
                        newMessage.setAttribute("msg", receivedMessage["message"]);
                        newMessage.setAttribute("type", "open-question-incomMSG");
                        chatContainer.appendChild(newMessage);
                        chatContainer.scrollTop = chatContainer.scrollHeight;
                    }
                    else{
                        alert(receivedMessage["message"]);

                    }


                }


            })
            socketsStartedBefore = true;


        }
}


function closeWebsockets(){

    notificationWebSocket.close();
    questionCHat.close();
    socketsStartedBefore = false;
}