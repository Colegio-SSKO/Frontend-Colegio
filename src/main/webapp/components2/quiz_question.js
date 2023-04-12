class QuizQuestion extends HTMLElement {
    connectedCallback() {

        let title = this.attributes.title.value;
        let Question = this.attributes.Question.value;
        let answer1 = this.attributes.answer1.value;
        let answer2 = this.attributes.answer2.value;
        let answer3 = this.attributes.answer3.value;
        let answer4 = this.attributes.answer4.value;
        this.innerHTML = `
        <div class="quiz-wrap">
        <h3>${title}</h3>
        <p>${Question}</p>
        <div class="quiz-q">
            <div class="q-number">A</div>
            <div class="question">${answer1}</div>
        </div>

        <div class="quiz-q">
            <div class="q-number">B</div>
            <div class="question">${answer2}</div>
        </div>

        <div class="quiz-q">
            <div class="q-number">C</div>
            <div class="question">${answer3}</div>
        </div>

        <div class="quiz-q">
            <div class="q-number">D</div>
            <div class="question">${answer4}</div>
        </div>

        <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
        </ul>
    </div>
        `;
    }
}

customElements.define('quiz-question', QuizQuestion);