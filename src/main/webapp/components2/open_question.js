class Open_question extends HTMLElement {
    connectedCallback() {

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
            event.preventDefault();
            // messageData = {
            //     "message" : message.value,
            //     "receiver":
            // }
        })

    }
}

customElements.define('open-question', Open_question);