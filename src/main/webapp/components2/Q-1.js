class Q_1 extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let title = this.attributes.title.value;
        let accept = this.attributes.accept.value;
        let description = this.attributes.description.value;
        this.innerHTML = `
        <div class="q-1-cart-item">
        <div class="q-1-tumbnail-img">
            <img src="${img_src}" alt="" srcset="">
        </div>

        <div class="q-1-content">
            <h2 class="fnt fnt-extraBold fnt-large">${title}</h2>
            <p class="fnt fnt-bold fnt-small">${accept}</p>
            <h3 class="fnt fnt-light fnt-mid">${description}</h3>
            <button class="btn btn-small btn-solid">Session</button>
        </div>

    </div>
        `;
    }
}
    
customElements.define('q-1', Q_1);