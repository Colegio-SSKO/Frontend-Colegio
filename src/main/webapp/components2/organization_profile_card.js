class Organization_profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let address = this.attributes.address.value;
        let tel_num = this.attributes.tel_num.value;
        let organization_id = this.attributes.organization_id.value;

        this.innerHTML = `
        <a class="all_teacher fnt fnt-bold fnt-mid" id="${organization_id}" href="/myorganization_Teachers"><button class="btn btn-solid btn-a">Teachers</button></a>
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-large">Organization Name: <span class="fnt-mid fnt-bold fnt">${name}</span></h4><br>
            <p class="fnt fnt-large fnt-bold">Address: <span class="fnt-mid fnt-bold fnt">${address}</span></p><br>
            <p class="fnt fnt-large fnt-bold">Tel No: <span class="fnt-mid fnt-bold fnt">${tel_num}</span></p>
            
        </div>
        <div class="edit-and-delte-btns">
            <a href="/edit_profileOrg"><button class="btn-profile is-a-route fnt fnt-bold fnt-mid">Edit Profile</button></a>
        </div>

    </div>
        `;
    }
}

customElements.define('organizationprofile-card', Organization_profile_card);