class Search_main_teacher extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let quli = this.attributes.quli.value;
        let teacher_id = this.attributes.teacher_id.value;

        this.innerHTML = `
            <div class="result-notification" id="${teacher_id}" >
                <div class="result-prof-img">
                    <img src="${img_src}" alt="">
                </div>
                <div class="result-details">
                    <h3 class="fnt fnt-bold fnt-mid">${name}</h3>
                    <h3 class="fnt  fnt-mid">${quli}</h3>
                </div>
            </div>
        `;

    }
}

customElements.define('search-teacher', Search_main_teacher);