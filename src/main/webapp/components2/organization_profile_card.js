class Organization_profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let tel_num = this.attributes.tel_num.value;
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
        <button class="btn btn-outlined btn-large"><a class="all_teacher fnt fnt-bold fnt-mid" id="${organization_id}" href="/myorganization_Teachers">Teachers</a></button>
        <button class="btn btn-outlined btn-large"><a class="fnt fnt-bold fnt-mid" href="">Advertisements</a></button>
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-mid">${name}</h4>
            <p class="fnt fnt-mid">${address}</p>
            <p class="fnt fnt-mid">${tel_num}</p>
            
        </div>
        <div class="edit-and-delte-btns">
            <button class="btn btn-solid fnt fnt-bold fnt-mid"><a href="/edit_profileOrg">Edit Profile</a></button>
            <button id="delete-profile" class="btn btn-solid fnt fnt-bold fnt-mid">Delete Profile</button>
        </div>

    </div>
        `;
    }
}

customElements.define('organizationprofile-card', Organization_profile_card);