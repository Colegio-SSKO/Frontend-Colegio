class Open_question_question extends HTMLElement {
    connectedCallback() {


        this.innerHTML = `
       <div class="open-question-new-container">
        <div class="open-question-new-heading">
            <h3>Basic algebra grade 9 help </h3>
            <p>
                Can you help me with understanding basic algebra for grade 9, A step by step answer for the attached question with an explanation.
            </p>
        </div>
        <div class="open-question-new-image1">
            <img  src="../static/img/components_images/video.png" alt="">
        </div>
        <div class="open-question-new-btn">
            <div class="open-question-new-profile">
                <div class="img">
                    <img src="./profile picture.png" alt="">
                </div>
                <div class="texts">
                    <h4>Accepted by: <span>Ranil Perera</span></h4>
                    <h5>OL Maths Teacher</h5>
                </div>
            </div>
            <div class="open-question-new-btn">
                <button>Request Session</button>
            </div>
        </div>
        <h3>
            Answers
        </h3>
        <div class="open-question-new-answers">
            <img src="../static/img/components_images/Group%2041.png" alt="">
            <img src="../static/img/components_images/Group%2041.png" alt="">
        </div>
        <div class="open-question-new-feedback">
            <h3>Feedback for the answers</h3>
            <div class="open-question-new-comment">
                <img src="./Vector.png" alt="">
                <input placeholder="Comment here..." type="text">
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define('open-question-question', Open_question_question);