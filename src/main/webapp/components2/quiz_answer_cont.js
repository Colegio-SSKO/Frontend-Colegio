class Quiz_answer_cont extends HTMLElement {
    connectedCallback() {

        let title = this.attributes.title.value;
        let Question = this.attributes.Question.value;
        let q_number = this.attributes.q_number.value;
        let answer1 = this.attributes.answer1.value;
        let answer2 = this.attributes.answer2.value;
        let answer3 = this.attributes.answer3.value;
        let answer4 = this.attributes.answer4.value;
        let correct = this.attributes.correct.value;
        let given = this.attributes.given.value;
        this.innerHTML = `
        <div id="js-quiz-question-wrap" class="quiz-wrap">
            <h3 class="fnt fnt-bold fnt-large">${title}</h3>
            <p class="fnt fnt-mid fnt-bold" id="js-quiz-q-question">${Question}</p>
            <div id="js-quiz-q-answer-1-backg" class="quiz-q">
                <div class="q-number fnt-mid fnt fnt-bold">A</div>
                <div id="js-quiz-q-answer-1" class="question fnt fnt-bold fnt-mid">${answer1}</div>
            </div>
    
            <div id="js-quiz-q-answer-2-backg" class="quiz-q">
                <div class="q-number fnt-mid fnt fnt-bold">B</div>
                <div id="js-quiz-q-answer-2" class="question fnt-mid fnt fnt-bold">${answer2}</div>
            </div>
    
            <div id="js-quiz-q-answer-3-backg" class="quiz-q">
                <div class="q-number fnt-mid fnt fnt-bold">C</div>
                <div id="js-quiz-q-answer-3" class="question fnt-mid fnt fnt-bold">${answer3}</div>
            </div>
    
            <div id="js-quiz-q-answer-4-backg" class="quiz-q">
                <div class="q-number fnt-mid fnt fnt-bold">D</div>
                <div id="js-quiz-q-answer-4" class="question fnt-mid fnt fnt-bold">${answer4}</div>
            </div>
    
            <ul>
                <li class="js-quiz-previous"><span class="material-symbols-outlined">keyboard_double_arrow_left</span></li>
                <li id="js-quiz-q-number" class=" fnt-mid fnt fnt-bold">${q_number}</li>
                <li class="js-quiz-next"><span class="material-symbols-outlined">keyboard_double_arrow_right</span></li>
            </ul>
    </div>
        `;
        let correctCont = {
            "op1" : "js-quiz-q-answer-1-backg",
            "op2" : "js-quiz-q-answer-2-backg",
            "op3" : "js-quiz-q-answer-3-backg",
            "op4" : "js-quiz-q-answer-4-backg"
        }

        //color the correct one
        let correctAnserCont = document.querySelector(`#${correctCont[correct]}`).querySelector('.q-number');

        correctAnserCont.style.backgroundColor = 'red';

    }
}

customElements.define('quiza-cont', Quiz_answer_cont);