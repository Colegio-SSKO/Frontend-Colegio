class Q_2 extends HTMLElement {
    connectedCallback() {
        let question_ID = this.attributes.question_ID.value;
        let img_src= this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let accept = this.attributes.accept.value;
        let description = this.attributes.description.value;
        this.innerHTML = `
        <div class="q-2-cart-item js-questionCards" >

        <div class="q-2-content" id="${question_ID}">
            <h2 class="fnt fnt-extraBold fnt-large">${title}</h2>
            <p class="fnt fnt-small">Accept by:- ${accept}</p>
            <h3 class="fnt fnt-light fnt-mid">${description}</h3>
            <button class="btn btn-solid btn-small js-questionButton js-session" id="${question_ID}">Session</button>
            <button class="btn btn-solid btn-small js-questionButton js-question" id="${question_ID}">Question</button>

        </div>

        <div class="q-2-price">
            <img src="${img_src}" alt="">
        </div>
    </div>
        `;
    }
}

customElements.define('q-2', Q_2);