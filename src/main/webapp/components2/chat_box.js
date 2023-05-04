class Chat_box extends HTMLElement {
    connectedCallback() {

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
            htmlcontent += `<chat-msg type="${i["type"]}" msg="${i["msg"]}"></chat-msg>
            `;
        }

        this.innerHTML = `
         <div class="open-question-chat fadeInanimation">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('chat-box', Chat_box);





