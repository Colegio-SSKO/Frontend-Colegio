class Comment extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;

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
                    <img src="../static/img/components_images/pro.png" alt="">
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

        let comment = document.querySelector("#js-quiz-comment-value");
        let commentContainer = document.querySelector("#js-quiz-comment-container");

        let sendButton = document.querySelector("#js-quiz-comment-send-btn");
        sendButton.addEventListener("click" , (ev)=>{
            quizCommentSocket.send(comment.value);
            comment.value = "";
        })

        quizCommentSocket.addEventListener('message', (event)=>{
            commentContainer.innerHTML += `
                <div class="comment-cmnt-1">
                    <img src="${getUserProfileImage()}" alt="">
                    <p class="fnt fnt-mid">${event.data}
                    </p>
                </div>
            `;
        })
    }
}

customElements.define('quiz-comment', Comment);