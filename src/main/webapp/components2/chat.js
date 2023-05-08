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
        console.log("data1")
        console.log(data)

        //answer questions
        let data2 = await fetch("http://localhost:8090/api/teachers/answer_questions/", {
            method : "GET",
            credentials : "include"
        }).then((response)=>
            response.json()

        );

        console.log("data2")
        console.log(data2)






        let htmlcontent = "";

        for (let i of data) {
            if (i["status"]== 2){

                htmlcontent += `<new-chat isTeacher="0" messages="${encodeURIComponent(JSON.stringify(i["messages"]))}" teacher_id="${i["question.accept_teacher_id"]}" author_id="${i["teacher.user_ID"]}" chat_id="${i["question.question_id"]}" img_src="${i["pro_pic"]}" qulifi="${i["qualification_level"]}" title="${i["question_title"]}" description="${i["question_description"]}" author="${i["f_name"] + i["l_name"]}"></new-chat>
                `;

            }
        }

        let htmlcontent2 = "";
        console.log("mekaa")
        console.log(data2)

        for (let i of data2) {
            if (i["question.status"]== 2){
                htmlcontent2 += `<new-chat teacher_id="${i["question.accept_teacher_id"]}" isTeacher="1" messages="${encodeURIComponent(JSON.stringify(i["messages"]))}" author_id="${i["question.user_id"]}" chat_id="${i["question.question_id"]}" img_src="${i["pro_pic"]}" qulifi="${i["qualification_level"]}" title="${i["question_title"]}" description="${i["question_description"]}" author="${i["f_name"] + i["l_name"]}"></new-chat>
                `;

            }
        }

        this.innerHTML = `

       
         <div class="chat-container">
          <div class="chat-msgs">
          `+ htmlcontent + htmlcontent2 +`
                  
           </div>
           <chat-list></chat-list>
        </div>
        
        
        
        `;





        let html_left = ``;
        for (let i of data){
            if (i["status"]== 2){

                html_left += ` <chat-listitem question_id="${i["question.question_id"]}" img_src="${i["question_img"]}" chatname="${i["question_title"]}"></chat-listitem>`;
            }

        }


        let html_left2 = ``;
        for (let i of data2){
            if (i["question.status"]== 2){

                html_left2 += ` <chat-listitem question_id="${i["question.question_id"]}" img_src="${i["question_img"]}" chatname="${i["question_title"]}"></chat-listitem>`;
            }

        }


        document.querySelector(".chat-headers").innerHTML =`<h4>My questions</h4><br>`+ html_left + `<h4>Anser questions</h4><br>` +html_left2;







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