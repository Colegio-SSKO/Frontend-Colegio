class Chat_list extends HTMLElement {
    connectedCallback() {


       let data = [
            {
                "chat_id" : "1",
                "chatname": "kavinda"
            },

            {
                "chat_id" : "2",
                "chatname": "sachini"
            },

            {
                "chat_id" : "3",
                "chatname": "senith"
            },
            {
                "chat_id" : "4",
                "chatname": "bosa"
            }
        ]

        // let dataString = decodeURIComponent(this.getAttribute('dataString'));
        // let data = JSON.parse(dataString);


        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<chat-listitem chat_id="${i["chat_id"]}" chatname="${i["chatname"]}"></chat-listitem>
            `;
        }

        this.innerHTML = `
           <div class="chat-list">
                <div class="chatbar">Message Box</div>
                    <div class="chat-headers fadeInanimation">
            
                 `+ htmlcontent +`
        
            </div>
            </div>
        `;
    }
}


customElements.define('chat-list', Chat_list);