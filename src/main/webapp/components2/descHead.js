class DescHead extends HTMLElement {
    connectedCallback() {
        let id = this.attributes.id.value;
        let heading = this.attributes.heading.value;
        let content = this.attributes.content.value;
        this.innerHTML = `
        <div id="${id}" class="desc-head-wrap">
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