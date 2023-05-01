class Q_4 extends HTMLElement {
    connectedCallback() {
        let question_ID = this.attributes.question_ID.value;
        let img_src= this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let accept = this.attributes.accept.value;
        let description = this.attributes.description.value;
        this.innerHTML = `
        <div class="q-2-cart-item js-questionCards fadeInanimation" >

        <div class="q-2-content" id="${question_ID}">
            <h2 class="fnt fnt-extraBold fnt-large">${title}</h2>
            <p class="fnt fnt-small">pending</p>
            <h3 class="fnt fnt-light fnt-mid">${description}</h3>
        </div>

        <div class="q-2-price">
            <img src="${img_src}" alt="">
        </div>
    </div>
        `;
    }
}

customElements.define('q-4', Q_4);