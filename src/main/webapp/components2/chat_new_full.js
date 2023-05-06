class Chat_new_full extends HTMLElement {
    connectedCallback() {

        let chat_id = this.attributes.chat_id.value;
        let img_src = this.attributes.img_src.value;
        let qulifi = this.attributes.qulifi.value;
        let title= this.attributes.title.value;
        let description= this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_id = this.attributes.author_id.value





        this.innerHTML = `

          <div class="open-question-wrap chat-content" id="${chat_id}">
            <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
            <p class="fnt fnt-light fnt-mid">${description}</p>

            <div class="open-question-message-wrap">
                <chat-box chatid="${chat_id}"></chat-box>

              <div class="open-question-msgBox">
                <form action="#">
                  <input type="text" name="message" class="fnt fnt-mid fnt-bold js-quession-chat-input${chat_id}"
                    placeholder="Type your response">

                  <span class="material-icons">attach_file</span>
                   <button  class="send-button js-quession-chat-send-btn${chat_id}"><span class="material-icons">send</span></button>
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

        let messageSendButton = document.querySelector(`.js-quession-chat-send-btn${chat_id}`);
        let message = document.querySelector(`.js-quession-chat-input${chat_id}`);
        let messageData = {};
        messageSendButton.addEventListener('click', (event)=>{

            event.preventDefault();
            alert("send btn ek wed2")
            if (message.value != ""){
                messageData = {
                    "config" : false,
                    "message" : message.value,
                    "receiver": parseInt(author_id),
                    "sender" : getUserID(),
                    "questionId" : parseInt(chat_id)
                }
                console.log(messageData)

                questionCHat.send(JSON.stringify(messageData));
                let chatContainer = document.querySelector(".open-question-chat");
                if (chatContainer){
                    chatContainer.innerHTML += `
                            <div class="open-question-msg open-question-outgoingMSG"> <p>${message.value}</p></div>
                            <br>
                        `
                    alert("methnt awne")
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }
            }
            message.value = "";
        })

    }
}

customElements.define('new-chat', Chat_new_full);