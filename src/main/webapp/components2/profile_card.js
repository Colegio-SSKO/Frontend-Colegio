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
            <h4 class="fnt fnt-bold fnt-mid">${name} <span class="material-icons-outlined"> ${gender}</span></h4>
            <p class="fnt fnt-mid">${date}</p>
            <p class="fnt fnt-mid">${education_level}</p>
            
        </div>
        <div class="edit-and-delte-btns">
            <button class="btn btn-solid"><a href="/edit_profile" >Edit Profile</a></button>
            <button id="delete-profile" class="btn btn-solid">Delete Profile</button>
        </div>

    </div>
        `;
    }
}

customElements.define('profile-card', Profile_card);