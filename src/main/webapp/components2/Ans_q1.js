class Ans_q1 extends HTMLElement {
    connectedCallback() {

        let question_ID = this.attributes.question_ID.value;
        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let accept = this.attributes.accept.value;
        let description = this.attributes.description.value;
        this.innerHTML = `
        <div class="q-1-cart-item js-questionCards" >
        <div class="q-1-tumbnail-img">
            <img src="${img_src}" alt="" srcset="">
        </div>

        <div class="q-1-content">
            <h2 class="fnt fnt-extraBold fnt-large">${title}</h2>
            <p class="fnt fnt-bold fnt-small">${accept}</p>
            <h3 class="fnt fnt-light fnt-mid">${description}</h3>
            <button id="js-quession-${question_ID}" class="btn btn-small btn-solid js-question ">Answer</button>

        </div>

    </div>
        `;
    }
}

customElements.define('ans-q1', Ans_q1);