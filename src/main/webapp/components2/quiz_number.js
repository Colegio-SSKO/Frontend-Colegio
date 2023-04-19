class Quiz_number extends HTMLElement {
    connectedCallback() {

        let numberOfQuestions = this.attributes.numberOfQuestions.value;

        let insertThisHTML = "";
        for(let i=0; i<numberOfQuestions; i++){
            insertThisHTML += `<button id="js-quiz-number-q-number${i+1}" class="btn btn-small js-quiz-number">${i+1}</button>`;
        }

        this.innerHTML = `
      <div class="quiz-numbers-main">
        <div class="quiz-numbers">
            
           ${insertThisHTML}
        </div>
        <div class="quiz-number-submit">
            <button class="btn btn-small">Submit</button>
        </div>
    </div>
        `;




    }
}

customElements.define('quiz-number', Quiz_number);