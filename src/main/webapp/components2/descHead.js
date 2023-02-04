class DescHead extends HTMLElement {
    connectedCallback() {

        let heading = this.attributes.heading.value;
        let content = this.attributes.content.value;
        this.innerHTML = `
        <div class="desc-head-wrap">
        <div class="desc-head">${heading}</div>
        <div class="desc-cont">
            <p class="fnt fnt-light fnt-large">${content}</p>
            <span class="material-icons">play_circle_filled</span>
        </div>
    </div>
        `;
    }
}
    
customElements.define('description-head', DescHead);