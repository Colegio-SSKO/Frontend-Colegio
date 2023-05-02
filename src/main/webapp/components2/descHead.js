class DescHead extends HTMLElement {
    connectedCallback() {
        let course_media_id = this.attributes.course_media_id.value;
        let heading = this.attributes.heading.value;
        let content = this.attributes.content.value;
        this.innerHTML = `
        <div id="${course_media_id}" class="desc-head-wrap">
        <div class="desc-head fnt-mid fnt fnt-bold">${heading}</div>
        <div class="desc-cont">
            <p class="fnt fnt-mid fnt-bold">${content}</p>
            <span class="material-icons">play_circle_filled</span>
        </div>
    </div>
        `;
    }
}

customElements.define('description-head', DescHead);