class Chat_box extends HTMLElement {
    connectedCallback() {
        let chatid = this.attributes.chatid.value;
        let messages = this.attributes.messages.value;
        let isTeacher =  this.attributes.isTeacher.value;

        let messagesDecoded = decodeURIComponent(messages);
        let messagesJson = JSON.parse(messagesDecoded)
        console.log("onna inna")
        console.log(messagesJson)
        console.log(isTeacher)

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

        for (let i of messagesJson) {

            if (isTeacher == 0){
                if (i["isTeacherSent"] == 0){

                    htmlcontent += `<chat-msg type="open-question-outgoingMSG" msg="${i["message"]}" chatid="${i["chat_id"]}"></chat-msg>`
                }
                else{
                    htmlcontent += `<chat-msg type="open-question-incomMSG" msg="${i["message"]}" chatid="${i["chat_id"]}"></chat-msg>`
                }
            }
            else if (isTeacher == 1){
                if (i["isTeacherSent"] == 0){

                    htmlcontent += `<chat-msg type="open-question-incomMSG" msg="${i["message"]}" chatid="${i["chat_id"]}"></chat-msg>`

                }
                else{

                    htmlcontent += `<chat-msg type="open-question-outgoingMSG" msg="${i["message"]}" chatid="${i["chat_id"]}"></chat-msg>`
                }
            }
            else{
                alert("error")
            }


        }

        this.innerHTML = `
         <div id="Js-question-chat-box${chatid}" class="open-question-chat fadeInanimation">
            
                 `+ htmlcontent +`
        
            </div>
        `;
    }
}

customElements.define('chat-box', Chat_box);





