class Organization_profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let tel_num = this.attributes.tel_num;

        this.innerHTML = `
        <div class="profile-card-wrap">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">${name}</h4>
            <p class="fnt fnt-mid">${address}</p>
            <p class="fnt fnt-mid">${tel_num}</p>

        </div>

        <span class="profile-card-details-edit material-icons-outlined">edit</span>
    </div>
        `;
    }
}
    
customElements.define('organizationprofile-card', Organization_profile_card);