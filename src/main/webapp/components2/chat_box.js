class Chat_box extends HTMLElement {
    connectedCallback() {
        let chatid = this.attributes.chatid.value;

       let data = [
            {
                "type": "open-question-incomMSG",
                "msg": "hello"
            },

            {
                "type": "open-question-outgoingMSG",
                "msg": "hello"
            },

            {
                "type": "open-question-incomMSG",
                "msg": "hello"
            },

            {
                "type": "open-question-outgoingMSG",
                "msg": "hello"
            },

            {
                "type": "open-question-incomMSG",
                "msg": "hello"
            }
        ]

        // let dataString = decodeURIComponent(this.getAttribute('dataString'));
        // let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<chat-msg type="${i["type"]}" msg="${i["msg"]}" chatid="${chatid}"></chat-msg>
            `;
        }

        this.innerHTML = `
         <div id="Js-question-chat-box${chatid}" class="open-question-chat fadeInanimation">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('chat-box', Chat_box);





