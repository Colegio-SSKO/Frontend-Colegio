class Profile_card extends HTMLElement {
    connectedCallback() {

        let profile_img = this.attributes.profile_img.value;
        let name = this.attributes.name.value;
        let date = this.attributes.date.value;
        let gender = this.attributes.gender.value;
        let education_level = this.attributes.education_level.value;
        this.innerHTML = `
        <div class="profile-card-wrap">
        <div class="profile-card-image">
            <img src="${profile_img}" alt="profile picture" srcset="">
        </div>
        <div class="profile-card-details">
            <h4 class="fnt fnt-bold fnt-small">${name} <span class="material-icons-outlined"> ${gender}</span></h4>
            <p class="fnt fnt-small">${date}</p>
            <p class="fnt fnt-small">${education_level}</p>

        </div>

        <span class="profile-card-details-edit material-icons-outlined">edit</span>
    </div>
        `;
    }
}
    
customElements.define('profile-card', Profile_card);