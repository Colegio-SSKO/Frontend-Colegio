class Open_question_question extends HTMLElement {
    connectedCallback() {
        let question_ID = this.attributes.question_ID.value;
        let img_src = this.attributes.img_src.value;
        let img_src2 = this.attributes.img_src2.value;
        let title = this.attributes.title.value;
        let accept = this.attributes.accept.value;
        let description = this.attributes.description.value;
        let quli = this.attributes.quli.value;


        this.innerHTML = `
       <div class="open-question-new-container">
        <div class="open-question-new-heading">
            <h3>${title}</h3>
            <p>
               ${description}
            </p>
        </div>
        <div class="open-question-new-image1">
            <img src="${img_src}">
        </div>
        <div class="open-question-new-btn">
            <div class="open-question-new-profile">
                <div class="img">
                    <img src="${img_src2}">
                </div>
                <div class="texts">
                    <h4>Accepted by: ${accept}</h4>
                    <h5>${quli}</h5>
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