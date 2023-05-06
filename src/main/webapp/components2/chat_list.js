class Chat_list extends HTMLElement {
    connectedCallback() {


       // let data = [
       //      {
       //          "chat_id" : "1",
       //          "chatname": "kavinda",
       //          "img_src": "sdsa"
       //      },
       //
       //      {
       //          "chat_id" : "2",
       //          "img_src": "sdsa",
       //          "chatname": "sachini"
       //      },
       //
       //      {
       //          "chat_id" : "3",
       //          "img_src": "sdsa",
       //          "chatname": "senith"
       //      },
       //      {
       //          "chat_id" : "4",
       //          "img_src": "sdsa",
       //          "chatname": "bosa"
       //      }
       //  ]

        // let dataString = decodeURIComponent(this.getAttribute('dataString'));
        // let data = JSON.parse(dataString);


        let htmlcontent = "";

        // for (let i of data) {
        //     htmlcontent += `<chat-listitem chat_id="${i["chat_id"]}" chatname="${i["chatname"]}" img_src="${i["img_src"]}"></chat-listitem>
        //     `;
        // }

        this.innerHTML = `
           <div class="chat-list">
                <div class="chatbar fnt-mid fnt fnt-bold">Your Sessions</div>
                    <div class="chat-headers fadeInanimation">
            
                 `+ htmlcontent +`
        
            </div>
            </div>
        `;
    }
}


customElements.define('chat-list', Chat_list);