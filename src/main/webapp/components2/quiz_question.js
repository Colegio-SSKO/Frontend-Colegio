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
            <br>
            <ul>
                <li class="js-quiz-previous"><img src="../static/img/components_images/skip_previous.svg" alt=""></li>
                <li id="js-quiz-q-number" class=" fnt-mid fnt fnt-bold">${q_number}</li>
                <li class="js-quiz-next"><img src="../static/img/components_images/skip_next.svg" alt=""></li>
            </ul>
    </div>
        `;

    let observingElementsAncestor = document.querySelector(".cont-body");
    let observingElement = document.querySelector("#js-quiz-question-wrap");

    let quizObserver = new MutationObserver((mutations)=> {
        for(let mutation of mutations){
            if(mutation.type === "childList" && !document.contains(observingElement)){
                alert("Remove wennai ynne deiyoo");

                observingElement.dispatchEvent(new Event('beforeRemove', {cancelable: true}));
            }
        }
    })

    let congif = {
        childList : true,
        subtree: true
    }  ;

    quizObserver.observe(observingElementsAncestor, congif);
    observingElement.addEventListener('beforeRemove', (event)=>{
        if(confirm("Are you sure you want to remove this element?")){
            quizObserver.disconnect();
            alert("true");

        }
        else{
            event.preventDefault()
        }

    })

    }
}

customElements.define('quiz-question', QuizQuestion);