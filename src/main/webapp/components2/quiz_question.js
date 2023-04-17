class QuizQuestion extends HTMLElement {
    connectedCallback() {

        let title = this.attributes.title.value;
        let Question = this.attributes.Question.value;
        let q_number = this.attributes.q_number.value;
        let answer1 = this.attributes.answer1.value;
        let answer2 = this.attributes.answer2.value;
        let answer3 = this.attributes.answer3.value;
        let answer4 = this.attributes.answer4.value;
        this.innerHTML = `
        <div class="quiz-wrap">
        <h3>${title}</h3>
        <p id="js-quiz-q-question">${Question}</p>
        <div id="js-quiz-q-answer-1-backg" class="quiz-q">
            <div class="q-number">A</div>
            <div id="js-quiz-q-answer-1" class="question">${answer1}</div>
        </div>

        <div id="js-quiz-q-answer-2-backg" class="quiz-q">
            <div class="q-number">B</div>
            <div id="js-quiz-q-answer-2" class="question">${answer2}</div>
        </div>

        <div id="js-quiz-q-answer-3-backg" class="quiz-q">
            <div class="q-number">C</div>
            <div id="js-quiz-q-answer-3" class="question">${answer3}</div>
        </div>

        <div id="js-quiz-q-answer-4-backg" class="quiz-q">
            <div class="q-number">D</div>
            <div id="js-quiz-q-answer-4" class="question">${answer4}</div>
        </div>

        <ul>
            <li class="js-quiz-previous"><span class="material-symbols-outlined">keyboard_double_arrow_left</span></li>
            <li id="js-quiz-q-number">${q_number}</li>
            <li class="js-quiz-next"><span class="material-symbols-outlined">keyboard_double_arrow_right</span></li>
        </ul>
    </div>
        `;
    }
}

customElements.define('quiz-question', QuizQuestion);