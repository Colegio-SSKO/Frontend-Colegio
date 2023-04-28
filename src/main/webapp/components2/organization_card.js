class Organization_card extends HTMLElement {
    connectedCallback() {

        let img_src = this.attributes.img_src.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let organization_id = this.attributes.organization_id.value;
        this.innerHTML = `
        <a href="/Organization_profile(stu)"><div class="teacher-card-wrap is-a-route" id="${organization_id}">

        <div class="teacher-card-image">
            <img src="${img_src}" alt="course image"><br/>
        </div>


        <div class="teacher-card-details">
            <h5 class="fnt fnt-bold fnt-large org_name">${name}</h5>
            <h5 class="fnt fnt-bold fnt-mid">${address}</h5>
        </div>


        </div></a>
        `;
    }
}

customElements.define('organization-card', Organization_card);