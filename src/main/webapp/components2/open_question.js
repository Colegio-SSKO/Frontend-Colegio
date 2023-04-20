class Open_question extends HTMLElement {
    connectedCallback() {

        let author_ID = this.attributes.author_ID.value;
        let img_src = this.attributes.img_src.value;
        let qulifi = this.attributes.qulifi.value;
        let title= this.attributes.title.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        // let authour_ID =
        this.innerHTML = `
        <div class="open-question-wrap">
            <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
                <p class="fnt fnt-light fnt-mid">${description}</p>
            <div class="open-question-message-wrap">
                <div class="open-question-chat">
                    <div class="open-question-msg open-question-incomMSG"><p>sada</p></div>
                <br>
                <div class="open-question-msg open-question-outgoingMSG"> <p>sdasd</p></div>
                <br>

                <div class="open-question-msg open-question-incomMSG"><p> sad<br></p></div>
                <br>
                <div class="open-question-msg open-question-outgoingMSG"> <p>asdasd</p></div>
                <br>

                <div class="open-question-msg open-question-incomMSG"><p> asd</p></div>
                <br>



        </div>
        <div class="open-question-msgBox">
            <form action="#">
                <input id="js-quession-chat-input" type="text" name="message"  class="fnt" placeholder="Type your response" >

                <span class="material-icons">attach_file</span>
                <send-button/>
            </form>


        </div>
    </div>

    <div class="open-question-teacherDtls">
        <!-- replace this with the component -->
        <div class="profilepic-card">
            <div class="pic-container">
                <img src="${img_src}" alt="profile picture" srcset="">

            </div>
            <div class="name-container">
                <h5 class="fnt fnt-bold fnt-small">${author}</h5>
                <h6 class="fnt fnt-small">${qulifi}</h6>
            </div>
        </div>
        <!--  -->
    </div>
</div>

        `;


        let messageSendButton = document.querySelector("#js-quession-chat-send-btn");
        let message = document.querySelector("#js-quession-chat-input");
        let messageData = {};
        messageSendButton.addEventListener('click', (event)=>{
            alert("send btn ek wed")
            event.preventDefault();
            messageData = {
                "message" : message.value,
                "receiver": author_ID,
                "sender" : getUserID()
            }
            console.log(messageData)

            questionCHat.send(JSON.stringify(messageData));
            message.value = "";
        })


        let chatContainer = document.querySelector(".open-question-chat");
        let receivedMessage;
        alert("methnta nm enw")
        questionCHat.addEventListener('message', (event)=>{
            alert("msg ek awa")
            receivedMessage = JSON.parse(event.data)


            //check whether this message is valid(for security)
            // if (receivedMessage["receiver"] == getUserID() || receivedMessage["sender"] == getUserID() ){
            //
            //     if (receivedMessage == )
            //
            //
            // }

            if (receivedMessage["receiver"] == getUserID()){
                chatContainer.innerHTML += `
                    <div class="open-question-msg open-question-incomMSG"><p>${receivedMessage["message"]}<br></p></div>
                    <br>
            `
            }
            else if(receivedMessage["sender"] == getUserID()){
                chatContainer.innerHTML += `
                    <div class="open-question-msg open-question-outgoingMSG"> <p>${receivedMessage["message"]}</p></div>
                    <br>
            `
            }



            chatContainer.scrollTop = chatContainer.scrollHeight;
        })


    }
}

customElements.define('open-question', Open_question);