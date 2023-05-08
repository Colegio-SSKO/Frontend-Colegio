class Organization_profile_card_stu extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let tel_num = this.attributes.tel_num.value;
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
        <a class="all_teacher fnt fnt-bold fnt-mid" id="${organization_id}" href="/organization_Teachers"><button class="is-a-route fnt fnt-bold fnt-mid btn btn-a btn-solid">Our Teachers</button></a>
        <div class="profile-card-wrap">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">Name: <span class="fnt-mid fnt-bold fnt">${name}</span></h4>
            <p class="fnt fnt-large fnt-bold">Address: <span class="fnt-mid fnt-bold fnt">${address}</span></p>
            <p class="fnt fnt-large fnt-bold">Tel No: <span class="fnt-mid fnt-bold fnt">${tel_num}</span></p>

        </div>
    </div>
        `;
    }
}
    
customElements.define('organizationprofile-cardstu', Organization_profile_card_stu);