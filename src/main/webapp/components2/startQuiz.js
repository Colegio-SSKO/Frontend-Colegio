class StartQuiz extends HTMLElement {
    connectedCallback() {

        let quiz_id = this.attributes.quiz_id.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;

        this.innerHTML = `
            <div class="starQuiz">
                <quiz-comment img_src="${img_src}" title="${title}" description="${description}" author="${author}" author_title="${author_title}"></quiz-comment>
                <button class="js-startquiz-start-btn btn btn-large btn-solid" id="${quiz_id}">Start Quiz</button>
            </div>
            
        `;
    }
}

customElements.define('start-quiz', StartQuiz);