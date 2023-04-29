class Ans_q2 extends HTMLElement {
    connectedCallback() {
        let question_ID = this.attributes.question_ID.value;
        let img_src= this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let accept = this.attributes.accept.value;
        let description = this.attributes.description.value;
        this.innerHTML = `
        <div class="q-2-cart-item js-questionCards" >

        <div class="q-2-content" >
            <h2 class="fnt fnt-extraBold fnt-large">${title}</h2>
            <p class="fnt fnt-small">${accept}</p>
            <h3 class="fnt fnt-light fnt-mid">${description}</h3>
            <button id="js-session-${question_ID}" class="btn btn-solid btn-small js-questionButton js-session">Session</button>
            <button id="js-quession-${question_ID}" class="btn btn-solid btn-small js-questionButton js-question">Answer</button>

        </div>

        <div class="q-2-price">
            <img src="${img_src}" alt="">
        </div>
    </div>
        `;
    }
}

customElements.define('ans-q2', Ans_q2);