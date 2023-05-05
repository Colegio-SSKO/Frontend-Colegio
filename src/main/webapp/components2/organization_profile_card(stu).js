class Organization_profile_card_stu extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let tel_num = this.attributes.tel_num.value;
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
        <button class="btn btn-outlined btn-large"><a class="all_teacher fnt fnt-bold fnt-mid" id="${organization_id}" href="/organization_Teachers">Our Teachers</a></button>
        <div class="profile-card-wrap">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">${name}</h4>
            <p class="fnt fnt-mid">${address}</p>
            <p class="fnt fnt-mid">${tel_num}</p>

        </div>
    </div>
        `;
    }
}
    
customElements.define('organizationprofile-cardstu', Organization_profile_card_stu);