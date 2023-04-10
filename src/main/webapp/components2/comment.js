class Comment extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;

        this.innerHTML = `
               <div class="comment-main">
        <div class="comment-about">
            <h3 class="fnt fnt-bold fnt-large">${title}</h3>
            <p class="fnt fnt-light fnt-mid">${description}</p>


            <jsp:include page="ratings.jsp"/>
            <div class="comment-profile">
                <div class="comment-author">
                    <img src="${img_src}" alt="">
                </div>
                <div class="comment-author-name">
                    <h3 class="fnt fnt-bold fnt-small">${author}</h3>
                    <p class="fnt fnt-small">${author_title}</p>
                </div>
            </div>
        </div>


        <div class="comment-cmnt">
            <div class="comment-comment-box">
                <img src="../static/img/components_images/pro.png" alt="">
                <form action="submit">
                    <input type="text" placeholder="Comment here...">
                    <button type="submit"></button>
                </form>
            </div>

            <div class="comment-comments">
                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/boy.jpeg" alt="">
                    <p class="fnt fnt-mid">This helpful me to improve my video editing knowledge
                    </p>
                </div><br><br>

                <div class="comment-cmnt-1">
                    <img src="../static/img/components_images/boy2.jpeg" alt="">
                    <p class="fnt fnt-mid">Superb course.. highly recommended
                    </p>
                </div>
            </div>
        </div>

    </div>

        `;
    }
}

customElements.define('quiz-comment', Comment);