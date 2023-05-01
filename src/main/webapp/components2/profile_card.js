class Profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let date = this.attributes.date.value;
        let gender = this.attributes.gender.value;
        let education_level = this.attributes.education_level.value;
        this.innerHTML = `
        <div class="profile-card-wrap" xmlns="http://www.w3.org/1999/html">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-mid">${name} | <span class="material-icons-outlined"> ${gender}</span></h4>
            <p class="fnt fnt-mid">${date}</p>
            <p class="fnt fnt-mid">${education_level}</p>
            
        </div>
        <div class="edit-and-delte-btns">
            <a href="/edit_profile" ><button class="btn btn-solid fnt fnt-bold fnt-mid is-a-route">Edit Profile</button></a>
            <a href="/upgrade"><button id="upgrade-to-teacher" class="btn btn-solid fnt is-a-route fnt-bold fnt-mid">Upgrade to Teacher</button></a>
            <button id="delete-profile" class="btn btn-solid fnt fnt-bold fnt-mid">Delete Profile</button>
        </div>

    </div>
        `;
    }
}

customElements.define('profile-card', Profile_card);