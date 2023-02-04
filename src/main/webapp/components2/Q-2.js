class Q_2 extends HTMLElement {
    connectedCallback() {
        let img_src= this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let flag = this.attributes.flag.value;
        let description = this.attributes.description.value;
        this.innerHTML = `
        <div class="q-2-cart-item">

        <div class="q-2-content">
            <h2 class="fnt fnt-extraBold fnt-large">${title}</h2>
            <p class="fnt fnt-small">${flag}</p>
            <h3 class="fnt fnt-light fnt-mid">${description}</h3>
            <button class="btn btn-solid btn-small">Session</button>
        </div>

        <div class="q-2-price">
            <img src="${img_src}" alt="">
        </div>
    </div>
        `;
    }
}
    
customElements.define('q-2', Q_2);