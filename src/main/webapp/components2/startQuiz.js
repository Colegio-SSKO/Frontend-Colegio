class StartQuiz extends HTMLElement {
    connectedCallback() {

        let quiz_id = this.attributes.quiz_id.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;
        let rating = this.attributes.rating.value;
        let votes = this.attributes.votes.value;
        let comments = this.attributes.comments.value;

        // let commentDecoded = decodeURIComponent(comments);
        // let commentsJson = JSON.parse(commentDecoded)
        // console.log(commentsJson)


        this.innerHTML = `
            <div class="starQuiz" id="js-start-quiz-id${quiz_id}">
                <quiz-comment comments="${comments}" id="${quiz_id}" rating="${rating}" votes="${votes}" img_src="${img_src}" title="${title}" description="${description}" author="${author}" author_title="${author_title}"></quiz-comment><br>
                <button class="js-startquiz-start-btn btn btn-profile btn-solid fnt-bold fnt fnt-mid" id="${quiz_id}">Start Quiz</button>
            </div>
            
        `;
    }
}

customElements.define('start-quiz', StartQuiz);