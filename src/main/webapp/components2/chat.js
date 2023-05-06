class Chat extends HTMLElement {


    async connectedCallback() {


        // let dataString = decodeURIComponent(this.getAttribute('dataString'));
        // let data = JSON.parse(dataString);

        //chat config
        let data = await fetch("http://localhost:8090/api/users/myQuestions/:"+getUserID(), {
            method : "GET",
            credentials : "include"
        }).then((response)=>
            response.json()

        );
        alert(JSON.stringify(data));
        alert("wedwed")



        let htmlcontent = "";

        for (let i of data) {
            if (i["status"]== 2){
                htmlcontent += `<new-chat chat_id="${i["question.question_id"]}" img_src="${i["question_img"]}" qulifi="${i["qualification_level"]}" title="${i["question_title"]}" description="${i["question_description"]}" author="${i["f_name"] + i["l_name"]}"></new-chat>
                `;

            }
        }

        this.innerHTML = `

         <div class="chat-container">
          <div class="chat-msgs">
          `+ htmlcontent +`
                  
           </div>
           <chat-list></chat-list>
        </div>
        `;
        let html_left = ``;
        for (let i of data){
            if (i["status"]== 2){
                alert("metanata enwa")
                html_left += ` <chat-listitem question_id="${i["question.question_id"]}" img_src="${i["question_img"]}" chatname="${i["question_title"]}"></chat-listitem>`;
            }

        }


        document.querySelector(".chat-headers").innerHTML = html_left;





        // document.addEventListener("DOMContentLoaded", function () {

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






        // });






    }

}

customElements.define('chat-last', Chat);