class Open_question extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let qulifi = this.attributes.qulifi.value;
        let title= this.attributes.title.value;
        let description= this.attributes.description.value;
        let msg1= this.attributes.msg1.value;
        let reply1= this.attributes.reply1.value;
        let msg2= this.attributes.msg2.value;
        let reply2= this.attributes.reply2.value;
        let msg3= this.attributes.msg3.value;
        let author = this.attributes.author.value;
        this.innerHTML = `
        <div class="open-question-wrap">
            <h4 class="fnt fnt-extraBold fnt-large">${title}</h4>
                <p class="fnt fnt-light fnt-mid">${description}</p>
            <div class="open-question-message-wrap">
                <div class="open-question-chat">
                    <div class="open-question-msg open-question-incomMSG"><p>${msg1}</p></div>
                <br>
                <div class="open-question-msg open-question-outgoingMSG"> <p>${reply1}</p></div>
                <br>

                <div class="open-question-msg open-question-incomMSG"><p> ${msg2}<br></p></div>
                <br>
                <div class="open-question-msg open-question-outgoingMSG"> <p>${reply2}</p></div>
                <br>

                <div class="open-question-msg open-question-incomMSG"><p> ${msg3}</p></div>
                <br>



        </div>
        <div class="open-question-msgBox">
            <form action="#">
                <input type="text" name="message"  class="fnt" placeholder="Type your response" >

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
    }
}
    
customElements.define('open-question', Open_question);