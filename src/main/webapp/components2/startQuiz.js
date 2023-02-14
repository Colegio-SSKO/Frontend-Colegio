class StartQuiz extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let description = this.attributes.description.value;
        let author = this.attributes.author.value;
        let author_title = this.attributes.author_title.value;

        this.innerHTML = `
            <div class="starQuiz">
                <quiz-comment img_src="${img_src}" title="${title}" description="${description}" author="${author}" author_title="${author_title}"></quiz-comment>
                <div class="quiz_button">
               <button class="btn btn-solid btn-large"><a class="fnt fnt-bold fnt-mid" href="/start_quiz">Start Quiz</a></button>
        </div>

    </div>
        `;
    }
}

customElements.define('start-quiz', StartQuiz);