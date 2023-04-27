function getUserID() {
    let userID = 1;
    return userID;
}

function  getUsername() {
    let username = "Senith Uthsara";
    return username;
}

function getUserProfileImage(){
    let userProfileImage = "../static/img/components_images/pro.png";
    return userProfileImage;
}

let temporary_data;

const quizCommentSocket = new WebSocket('ws://localhost:8090/quizCommentsHandler');




//question chat
const questionCHat = new WebSocket('ws://localhost:8090/questionChatHandler');
let chatContainer = document.querySelector(".open-question-chat");
let receivedMessage;
alert("methnta nm enw")
questionCHat.addEventListener('message', (event)=>{
    alert("msg ek awa")


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