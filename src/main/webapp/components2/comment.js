class Comment extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        let id = this.attributes.id.value;
        let comments = this.attributes.comments.value;

        let commentDecoded = decodeURIComponent(comments);
        let commentsJson = JSON.parse(commentDecoded)

        console.log("quizz")



        this.innerHTML = `
        <div class="comment-main">
        
            <div class="comment-about">
                <h3 class="fnt fnt-bold fnt-large">${title}</h3>
                <p class="fnt fnt-light fnt-mid">${description}</p>
    
                <div class="comment-profile">
                    <div class="comment-author">
                        <img src="${img_src}" alt="">
                    </div>
                    <div class="comment-author-name">
                        <h3 class="fnt fnt-bold fnt-mid">${author}</h3>
                        <p class="fnt fnt-mid">${author_title}</p>
                    </div>
                </div>
            </div>
    
            <content-ratings rating="${rating}" votes="${votes}"></content-ratings>
            
            <div class="comment-cmnt">
                <div class="comment-comment-box">
                    <img src="${getUserProfileImage()}" alt="">
                    <form>
                        <input id="js-quiz-comment-value" type="text" class="fnt-mid fnt fnt-bold" placeholder="Comment here...">
                        <button id="js-quiz-comment-send-btn" class="send-button"><span class="material-icons">send</span></button>
                    </form>
                </div>
    
                <div id="js-quiz-comment-container" class="comment-comments">
                   
                </div>
            </div>
            
    </div>

        `;

        let commentContainer = document.querySelector("#js-quiz-comment-container");
        let commentElement;
        console.log(commentsJson)
        commentsJson.forEach((comment)=>{
            commentElement = document.createElement('comment-item');
            commentElement.setAttribute("name", comment["user.f_name"] + comment["user.l_name"]);
            commentElement.setAttribute("pro_pic", comment["user.pro_pic"]);
            commentElement.setAttribute("message", comment["comments.message"])
            commentContainer.appendChild(commentElement)
        })


        let comment = document.querySelector("#js-quiz-comment-value");


        let sendButton = document.querySelector("#js-quiz-comment-send-btn");
        sendButton.addEventListener("click" , async (event)=>{
            event.preventDefault();
            let commentData = {
                "content_id" : id,
                "message" : comment.value,
            }

            let res = await fetch("http://localhost:8090/api/users/addComments/:"+getUserID(),{
                method : "POST",
                credentials : "include",
                body : JSON.stringify(commentData)
            }).then((response)=>
                response.json()

            );
            comment.value = "";
        })

        // quizCommentSocket.addEventListener('message', (event)=>{
        //     commentContainer.innerHTML += `
        //         <div class="comment-cmnt-1">
        //             <img src="${getUserProfileImage()}" alt="">
        //             <p class="fnt fnt-mid">${event.data}
        //             </p>
        //         </div>
        //     `;
        // })
    }
}

customElements.define('quiz-comment', Comment);