class Search_main_organization extends HTMLElement {
    connectedCallback() {
        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
            <div class="result-notification-org" id="${organization_id}">
                <div class="result-prof-img-org">
                    <img src="${img_src}" alt="">
                </div>
                <div class="result-details">
                    <h3 class="fnt fnt-bold fnt-mid">${name}</h3>
                </div>
            </div>
        `;

    }
}

customElements.define('search-organization', Search_main_organization);