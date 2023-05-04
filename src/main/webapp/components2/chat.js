class Chat extends HTMLElement {


    connectedCallback() {


        // let dataString = decodeURIComponent(this.getAttribute('dataString'));
        // let data = JSON.parse(dataString);

        let data = [
            {
                "chat_id" : "1",
                "img_src" : "ss",
                "qulifi" : "qusadlgggifi",
                "title" : "title",
                "description" : "meka susadapiri",
                "author" : "shano"
            },            {
                "chat_id" : "2",
                "img_src" : "ss",
                "qulifi" : "quasdlifi",
                "title" : "title",
                "description" : "meka supiri",
                "author" : "shano"
            },            {
                "chat_id" : "3",
                "img_src" : "ss",
                "qulifi" : "qugqqqqqqggglasdifi",
                "title" : "titsd le",
                "description" : "mekasdsd  supis sri",
                "author" : "shano"
            },            {
                "chat_id" : "4",
                "img_src" : "ss",
                "qulifi" : "qulifi",
                "title" : "tiaaatsddsle",
                "description" : "meka susd  sdsd sdpiri",
                "author" : "shano"
            },
        ]

        let htmlcontent = "";

        for (let i of data) {
            htmlcontent += `<new-chat chat_id="${i["chat_id"]}" img_src="${i["img_src"]}" qulifi="${i["qulifi"]}" title="${i["title"]}" description="${i["description"]}" author="${i["author"]}"></new-chat>
            `;
        }

        this.innerHTML = `

         <div class="chat-container">
          <div class="chat-msgs">
          `+ htmlcontent +`
                  <chat-list></chat-list>
           </div>
        </div>
        `;




        document.addEventListener("DOMContentLoaded", function () {

            let chatbar = document.querySelector('.chatbar');
            let chatlist = document.querySelector('.chat-list');


            chatbar.addEventListener("click", () => {
                if (chatlist.classList.contains('chat-list')) {
                    chatlist.classList.remove('chat-list');
                    chatlist.classList.add('chat-list-hide');

                }
                else {
                    chatlist.classList.remove('chat-list-hide')
                    chatlist.classList.add('chat-list')

                    chatContents.forEach(function (chatContent) {
                        chatContent.style.display = "none";
                    });
                }

            });


            const chatContents = document.querySelectorAll(".chat-content");
            chatContents.forEach(function (chatContent) {
                chatContent.style.display = "none";
            });


            const chatHeaders = document.querySelector(".chat-headers");

            chatHeaders.addEventListener("click", function (event) {
                event.preventDefault();
                const chatId = event.target.getAttribute("id");
                const chatContentToShow = document.getElementById(chatId);

                chatContents.forEach(function (chatContent) {
                    if (chatContent !== chatContentToShow) {
                        chatContent.style.display = "none";
                    }
                });

                chatContentToShow.style.display = "block";

                chatContentToShow.scrollTo(0, chatContentToShow.scrollHeight);
            });






        });






    }

}

customElements.define('chat-last', Chat);